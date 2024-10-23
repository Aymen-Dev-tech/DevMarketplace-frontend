import { AxiosError } from "axios";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../hooks/useAuth";

export default function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const logout = async () => {
    console.log("calling logout endpoint");
    try {
      await axios.get("/auth/logout", {
        withCredentials: true,
      });
      setAuth({
        name: "",
        phoneNumber: "",
        email: "",
        profilePicture: "",
      });
      navigate("/signup", { replace: true });
      console.log("navigate succ");
    } catch (err) {
      if (err instanceof AxiosError) {
        if (!err?.response) {
          console.log("No server response");
        } else if (err.response?.status === 401) {
          navigate("/signup", { replace: true });
        } else {
          console.log("login failed");
        }
      } else {
        console.log("Unexpected error", err);
      }
    }
  };
  return (
    <IconButton onClick={() => logout()}>
      <LogoutIcon sx={{ color: "black" }} />
    </IconButton>
  );
}
