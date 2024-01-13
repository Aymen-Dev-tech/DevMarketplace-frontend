import { AxiosError } from "axios";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const logout = async () => {
    console.log("calling logout endpoint");
    try {
      await axios.get("/auth/logout", {
        withCredentials: true,
      });
      navigate("/", { replace: true });
    } catch (err) {
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
  };
  return <button onClick={logout}>Logout</button>;
}
