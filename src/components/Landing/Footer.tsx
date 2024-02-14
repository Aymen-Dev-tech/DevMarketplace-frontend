import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export const Footer = () => {
  return (
    <Box
      sx={{
        height: "125px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "33.01px",
          margin: "0 49px 0 49px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "358px", height: "20px" }}>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "20px",
            }}
          >
            © 2024 Aymen-Dev-tech . All rights reserved
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "203px"}}>
          <img alt="fb" src="/icons/fb.svg" />
          <img alt="in" src="/icons/in.svg" />
          <img alt="x" src="/icons/x.svg" />
        </Box>
      </Box>
    </Box>
  );
};
