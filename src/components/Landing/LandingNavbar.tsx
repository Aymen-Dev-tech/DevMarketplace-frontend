import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
const links = [
  { name: "Home", href: import.meta.env.BASE_URL },
  { name: "Products", href: `${import.meta.env.VITE_BASE_URL}/marketplace` },
  { name: "Pricing", href: `${import.meta.env.BASE_URL}` },
  { name: "Contact", href: `${import.meta.env.BASE_URL}` },
];
export const LandingNavbar = () => {
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
              href={`${import.meta.env.VITE_BASE_URL}/signup`}
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};
