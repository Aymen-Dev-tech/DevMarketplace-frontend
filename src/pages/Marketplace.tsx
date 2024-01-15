import { AxiosError } from "axios";
import { fetchProfile } from "../api/fetching.apis";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";
export default function Marketplace() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetchProfile();
        if (!ignore) {
          setAuth(response);
        }
      } catch (err: unknown) {
        if (err instanceof AxiosError) {
          if (!err?.response) {
            console.log("No server response");
          } else if (err.response?.status === 401) {
            navigate("/login", { replace: true });
          } else {
            console.log("login failed");
          }
        } else {
          console.log("Unexpected error", err);
        }
      }
    }
    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    };
  }, [setAuth, navigate]);
  return (
    <>
      <div>Marketplace</div>
      <br />
      <Logout />
    </>
  );
}
