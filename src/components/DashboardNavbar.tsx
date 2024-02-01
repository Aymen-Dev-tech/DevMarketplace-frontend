import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import StoreIcon from "@mui/icons-material/Store";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useAuth } from "../hooks/useAuth";
export default function DashboardNavbar() {
  const { auth } = useAuth();
  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: 4,
        backgroundColor: "#FFFFFF",
        boxShadow: "none",
        padding: "0.5rem",
      }}
    >
      <Toolbar>
        <StoreIcon style={{ color: "#001EC0", fontSize: "35px" }} />
        <Typography
          variant="h5"
          noWrap
          sx={{
            marginLeft: "0.5rem",
            color: "#001EC0",
            letterSpacing: ".2rem",
            textDecoration: "none",
          }}
        >
          Dev
          <Box fontWeight="fontWeightMedium" display="inline">
            Marketplace
          </Box>
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "10px",
            flexGrow: 0,
            marginLeft: "auto",
            alignItems: "center",
          }}
        >
          <Avatar
            alt={auth.name.split(" ")[0]}
            src={auth.profilePicture}
            sx={{ width: 48, height: 48 }}
          />
          <Typography sx={{ color: "black", fontSize: "16px" }}>
            {auth.name.split(" ")[0].toUpperCase()}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
