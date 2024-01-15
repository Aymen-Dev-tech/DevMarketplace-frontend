import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import { fetchProfile } from "../api/fetching.apis";
import { AxiosError } from "axios";

export default function PresistLogin() {
  const { setAuth, auth } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const data = await fetchProfile();
        console.log("<PRESIST>: i recieved profile: ", data);
        if (!ignore) {
          setAuth(data);
          console.log("<PRESIST>: updating the auth state: ", auth);
        }
      } catch (err: unknown) {
        if (err instanceof AxiosError) {
          console.log("<PRESIST>: err", err);
        } else {
          console.log("<PRESIST>: Unexpected error in presist", err);
        }
      } finally {
        setIsLoading(false);
      }
    };
    let ignore = false;
    //run only when the auth state resetted and the user still posses a valid token
    auth.id == 0 ? verifyCookie() : setIsLoading(false);
    return () => {
      ignore = true;
    };
  }, [auth, setAuth]);

  return <div>{isLoading ? <p> Loading... </p> : <Outlet />}</div>;
}
