import axios from "./axios";

export const deleteProject = async (id: number | undefined) => {
  const { data } = await axios.delete(`/products/${id}`);
  return data;
};
