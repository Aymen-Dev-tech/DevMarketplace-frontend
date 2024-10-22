import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    window.open(`${import.meta.env.VITE_SERVER}/auth/google`, "_self");
  }, []);

  return <div> </div>;
}
