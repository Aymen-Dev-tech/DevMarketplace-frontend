import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

export const ProjectDropDown = ({ value, onChange, projects }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Selected Project</FormLabel>
        <TextField
          sx={{ width: "780px" }}
          select
          value={value}
          onChange={onChange}
        >
          {projects.map((project) => (
            <MenuItem
              key={project.id}
              value={JSON.stringify({
                id: project.id,
                name: project.name,
                description: project.description,
                price: project.price,
                DamoURL: project.DamoURL,
              })}
            >
              {project.name}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    </>
  );
};
