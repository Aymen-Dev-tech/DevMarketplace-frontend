import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import StoreIcon from "@mui/icons-material/Store";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { useAuth } from "../hooks/useAuth";

export default function DashboardNavbar() {
  const { auth } = useAuth();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <StoreIcon></StoreIcon>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: 200,
              fontFamily: "roboto",
              color: "white",
              letterSpacing: ".2rem",
              textDecoration: "none",
            }}
          >
            Educative
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexGrow: 0,
              marginLeft: "auto",
            }}
          >
            <Tooltip title="Open my_settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt={auth.name.split(" ")[0]}
                  src={auth.profilePicture}
                />
              </IconButton>
            </Tooltip>
            <p style={{ textAlign: "center" }}>{auth.name.split(" ")[0]}</p>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
