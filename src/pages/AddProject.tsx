import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import {
  projectTypesList,
  techNamesResponsType,
  techNamesResponse,
  typesResponse,
} from "../api/fetching.apis";
import { AxiosError } from "axios";
import { Box, Button, FormControl, FormHelperText, Paper } from "@mui/material";
import Textarea from "../components/Dashboard/Textarea";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { createProduct } from "../api/post.apis";
export type IFormInputes = {
  name: string;
  description: string;
  price: string;
  DamoURL: string;
  typeId: number | null;
  techId: number | null;
  techType: string;
  ProductPicture: FileList[];
};

let projectTechNamesRes: techNamesResponsType[] | [] = [];
export default function AddProject() {
  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      DamoURL: "",
      typeId: null,
      techId: null,
      techType: "",
      ProductPicture: [],
    },
  });
  const watchTechType = watch("techType", "");
  const [projectTypes, setProjectTypes] = useState<typesResponse[]>([]);
  const [techNamesList, setTechNamesList] = useState<
    techNamesResponsType[] | []
  >([]);

  useEffect(() => {
    const fetchProjectTypes = async () => {
      try {
        const projectTypesRes = await projectTypesList();
        if (watchTechType !== "")
          projectTechNamesRes = await techNamesResponse(watchTechType);
        if (!ignore) {
          setProjectTypes(projectTypesRes);
          setTechNamesList(projectTechNamesRes);
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
  }, [watchTechType]);

  const onSubmit: SubmitHandler<IFormInputes> = async (data) => {
    console.log("submit data: ", data);
    try {
      const res = await createProduct(data);
      console.log("create product response : ", res);
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log("server err: ", err);
      } else {
        console.log("unkown err: ", err);
      }
    }
  };
  return (
    <Paper
      elevation={3}
      sx={{
        width: "60%",
        height: "750px",
        margin: "auto auto auto auto",
        display: "flex",
        justifyContent: "center",
        borderRadius: 3,
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
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
            <FormLabel>Project Type</FormLabel>
            <Controller
              rules={{ required: "Project type required" }}
              control={control}
              name="typeId"
              render={({ field }) => (
                <TextField
                  select
                  {...field}
                  error={!!errors.typeId}
                  helperText={errors.typeId?.message}
                >
                  {projectTypes.map((project) => (
                    <MenuItem key={project.id} value={project.id}>
                      {project.name}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
            <FormLabel>Technology Type</FormLabel>
            <Controller
              rules={{ required: "Technology type required" }}
              control={control}
              name="techType"
              render={({ field }) => (
                <TextField
                  select
                  {...field}
                  error={!!errors.techType}
                  helperText={errors.techType?.message}
                >
                  <MenuItem value="Stack">Stack</MenuItem>
                  <MenuItem value="Language">Language</MenuItem>
                  <MenuItem value="Framework">Framework</MenuItem>
                </TextField>
              )}
            />
            <FormLabel>Technology Name</FormLabel>
            <Controller
              rules={{ required: "Technology Name Required" }}
              control={control}
              name="techId"
              render={({ field }) => (
                <TextField
                  select
                  {...field}
                  error={!!errors.techId}
                  helperText={errors.techId?.message}
                >
                  {techNamesList.map((item) => (
                    <MenuItem key={item.tech.id} value={item.tech.id}>
                      {item.tech.name}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
            <Button
              component="label"
              variant="outlined"
              startIcon={<UploadFileIcon />}
              sx={{ margin: "2rem 0 1rem 0" }}
            >
              Upload Pictures
              <input
                type="file"
                hidden
                accept="image/*"
                multiple
                aria-invalid={errors.ProductPicture ? "true" : "false"}
                {...register("ProductPicture", {
                  required: "Pictures are required",
                })}
              />
            </Button>
            {errors.ProductPicture && (
              <FormHelperText sx={{ color: "red" }}>
                {errors.ProductPicture.message}
              </FormHelperText>
            )}
            <Button
              variant="contained"
              type="submit"
              sx={{ marginBottom: "1rem" }}
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    </Paper>
  );
}
