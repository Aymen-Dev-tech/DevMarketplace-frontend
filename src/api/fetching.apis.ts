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
export type productsResponse = {
  id: number;
  name: string;
  price: number;
  isSold: boolean;
};

export type statResponse = {
  totalSales: number;
  totalProducts: number;
  soldProducts: number;
  stockProducts: number;
};

export type typesResponse = {
  id: number;
  name: string;
};

export type techNamesResponsType = {
  tech: {
    id: number;
    name: string;
  };
};

export const fetchProfile = async (): Promise<profileResponse> => {
  const response = await axios.get("/users/profile");
  return response.data;
};

export const productsList = async (): Promise<productsResponse[]> => {
  const response = await axios.get("/products");
  return response.data;
};

export const dashboardStat = async (): Promise<statResponse> => {
  const response = await axios.get("/products/stat");
  return response.data;
};

export const projectTypesList = async (): Promise<typesResponse[]> => {
  const response = await axios.get("/products/types");
  return response.data;
};

export const techNamesResponse = async (
  type: string
): Promise<techNamesResponsType[] | []> => {
  const response = await axios.get("/products/tech", { params: { type } });
  return response.data;
};
