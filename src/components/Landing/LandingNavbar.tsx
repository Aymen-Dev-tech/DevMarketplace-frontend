import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAuth } from "../../hooks/useAuth";
import Avatar from "@mui/material/Avatar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Logout from "../Logout";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
const serverBaseUrl = import.meta.env.BASE_URL;
const links = [
  { name: "Home", href: serverBaseUrl },
  {
    name: "Products",
    href: `${serverBaseUrl}/marketplace`,
  },
  { name: "Pricing", href: serverBaseUrl },
  { name: "Contact", href: serverBaseUrl },
];
export const LandingNavbar = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  //remove links from the navbar if the current user logged-in
  if (auth.id !== 0) links.splice(0, links.length);
  return (
    <AppBar
      component="nav"
      sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-around",
          height: "91px",
        }}
      >
        <Typography sx={{ color: "#252B42", fontSize: "24px" }}>
          <strong>Dev</strong>
          Marketplace
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "21px",
            // paddingLeft: "168px",
            // paddingRight: "309px",
          }}
        >
          {links.map((item) => (
            <Link
              href={item.href}
              underline="none"
              key={item.name}
              sx={{
                color: "#737373",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "24px",
              }}
            >
              {item.name}
            </Link>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "45px",
          }}
        >
          {auth.name !== "" ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Avatar
                alt={auth.name.split(" ")[0]}
                src={auth.profilePicture}
                sx={{ width: 48, height: 48 }}
              />
              {auth.Seller && (
                <IconButton
                  sx={{ marginRight: "-20px" }}
                  onClick={() => navigate("/dashboard")}
                >
                  <DashboardIcon sx={{ color: "black" }} />
                </IconButton>
              )}
              <Logout />
            </Box>
          ) : (
            <>
              <Link
                href="/api/auth/google"
                underline="none"
                sx={{ color: "#23A6F0" }}
              >
                Login
              </Link>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "140px",
                  height: "58px",
                  background: "#23A6F0",
                  borderRadius: "5px",
                  gap: "15px",
                }}
              >
                <Link
                  href={`${serverBaseUrl}/signup`}
                  underline="none"
                  sx={{
                    color: "#fff",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "28px",
                  }}
                >
                  Register
                </Link>
                <img alt="arrow-right" src="/icons/arrow-right.svg" />
              </Box>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
