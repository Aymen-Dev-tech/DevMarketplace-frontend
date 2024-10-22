import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    window.open("/api/auth/google", "_self");
  }, []);

  return <div> </div>;
}
