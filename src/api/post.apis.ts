import { IFormInputes } from "../pages/AddProject";
import axios from "./axios";
import { productsResponse } from "./fetching.apis";

export const createProduct = async (data: IFormInputes) => {
  console.log("recieved data: ", data);
  const response = await axios.post(
    "/products",
    {
      name: data.name,
      description: data.description,
      price: data.price,
      DamoURL: data.DamoURL.length > 0 ? data.DamoURL : null,
      typeId: data.typeId,
      techId: data.techId,
      ProductPicture: data.ProductPicture,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const updateProduct = async (
  id: number | undefined,
  data: Partial<IFormInputes>
) => {
  const response = await axios.patch(`/products/${id}`, { ...data });
  return response.data;
};

export const updateProductState = async (
  id: number | undefined,
  data: Partial<productsResponse> | undefined
) => {
  const response = await axios.patch(`/products/${id}`, { ...data });
  return response.data;
};
