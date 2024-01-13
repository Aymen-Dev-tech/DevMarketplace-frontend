import { useEffect } from "react";
import axios from "../api/axios";

export default function Profile() {
  useEffect(() => {
    const profile = async () => {
      return await axios.get("/users/profile");
    };
    console.log(profile());
  }, []);

  return <div>Profile</div>;
}
