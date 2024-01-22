import { IFormInputes } from "../pages/AddProject";
import axios from "./axios";

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
