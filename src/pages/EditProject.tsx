import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { EditProjectFrom } from "../components/Dashboard/EditProjectFrom";
import { useEffect, useState } from "react";
import { productsList, productsResponse } from "../api/fetching.apis";
import { AxiosError } from "axios";
import { ProjectDropDown } from "../components/Dashboard/ProjectDropDown";
import { useParams } from "react-router-dom";

export type selectType = {
  id: number;
  name: string;
};
export const EditProject = () => {
  const [projectsList, setProjectsList] = useState<Partial<productsResponse>[]>(
    []
  );

  const [selectedProject, setSelectedProject] = useState<string>("");
  let { id } = useParams();
  useEffect(() => {
    const getProjectsList = async () => {
      try {
        const productList = await productsList();
        if (!id) id = productList[0].id.toString();
        if (!ignore) {
          setProjectsList(productList);
          const firstProduct = productList.find(
            (product) => product.id === parseInt(id)
          );
          setSelectedProject(
            JSON.stringify({
              id: firstProduct?.id,
              name: firstProduct?.name,
              description: firstProduct?.description,
              price: firstProduct?.price,
              DamoURL: firstProduct?.DamoURL,
            })
          );
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log("axios err: ", err);
        } else {
          console.log("unknown err: ", err);
        }
      }
    };
    let ignore = false;
    getProjectsList();
    return () => {
      ignore = true;
    };
  }, []);
  const handleChange = (event) => {
    console.log("seleced value: ", event.target.value);
    setSelectedProject(event.target.value);
  };
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: "60%",
          height: "70%",
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
          <ProjectDropDown
            value={selectedProject}
            onChange={handleChange}
            projects={projectsList}
          />
          {selectedProject !== "" ? (
            <EditProjectFrom selectedProject={JSON.parse(selectedProject)} />
          ) : (
            <p> Loading... </p>
          )}
        </Box>
      </Paper>
    </>
  );
};
