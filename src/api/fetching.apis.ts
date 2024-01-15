import axios from "./axios";
export type profileResponse = {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  profilePicture: string;
  Seller?: {
    id: number;
  };
  Buyer?: {
    id: number;
  };
};
export const fetchProfile = async (): Promise<profileResponse> => {
  const response = await axios.get("/users/profile", {
    withCredentials: true,
  });
  console.log("nestJs response: ", response);

  return response.data;
};
