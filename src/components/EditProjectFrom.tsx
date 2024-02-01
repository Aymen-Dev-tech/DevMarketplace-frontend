import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { productDetails, productsResponse } from "../api/fetching.apis";
import { AxiosError } from "axios";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Textarea from "./Textarea";
import { updateProduct } from "../api/post.apis";
import { IFormInputes } from "../pages/AddProject";

export const EditProjectFrom = ({
  selectedProject,
}: {
  selectedProject: productsResponse;
}) => {
  const [project, setProject] = useState<productsResponse>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      DamoURL: "",
    },
  });
  useEffect(() => {
    const fetchProjectTypes = async () => {
      try {
        const productDetailsRes = await productDetails(
          selectedProject.id.toString()
        );
        if (!ignore) {
          const { name, description, price, DamoURL } = productDetailsRes;
          reset({
            name,
            description,
            price: price.toString(),
            DamoURL,
          });
          setProject(productDetailsRes);
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log("server err: ", err);
        } else {
          console.log("unkown err: ", err);
        }
      }
    };
    let ignore = false;
    fetchProjectTypes();
    return () => {
      ignore = true;
    };
  }, [selectedProject, reset]);
  const onSubmit: SubmitHandler<Partial<IFormInputes>> = async (data) => {
    console.log("submit data: ", data);
    try {
      await updateProduct(project?.id, data);
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log("server err: ", err);
      } else {
        console.log("unkown err: ", err);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <TextField
          error={!!errors.name}
          helperText={errors.name?.message}
          type="text"
          placeholder="Project Name"
          {...register("name", {
            required: "Name is required",
          })}
        />

        <FormLabel>Price</FormLabel>
        <TextField
          error={!!errors.price}
          helperText={errors.price?.message}
          type="text"
          placeholder="Price"
          {...register("price", {
            required: "Price is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Invalid price formate",
            },
          })}
        />

        <FormLabel>Damo URL</FormLabel>
        <TextField
          type="url"
          placeholder="https://example.com"
          {...register("DamoURL", { required: false })}
        />

        <FormLabel>Description</FormLabel>
        <Textarea
          name={"description"}
          register={register}
          validationSchema={{
            required: "Description is required",
          }}
        />
        {errors.description && (
          <FormHelperText sx={{ color: "red" }}>
            {errors.description?.message}
          </FormHelperText>
        )}
        <Button
          variant="contained"
          type="submit"
        >
          Save
        </Button>
      </FormControl>
    </form>
  );
};
