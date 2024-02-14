import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
export const CTA = () => {
  return (
    <Box
      sx={{
        height: "663px",
        bgcolor: "#E9F3FF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "258px",
          width: "388px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "360px",
            height: "5px",
            background: "#000000",
          }}
        ></Box>
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "40px",
            lineHeight: "49px",
          }}
        >
          <strong>Dev</strong>
          Marketplace
        </Typography>
        <Box
          sx={{ width: "350px", height: "44px", overflowWrap: "break-word" }}
        >
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "22px",
              color: "#4F4F4F",
              textAlign: "center",
            }}
          >
            Ready to start browsing or selling? Join our vibrant digital
            community today!
          </Typography>
        </Box>
        <Box
          sx={{
            width: "205px",
            height: "56px",
            background: "#23A6F0",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            sx={{
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "22px",
              color: "#FFFFFF",
            }}
            underline="none"
            href={`${import.meta.env.VITE_BASE_URL}/signup`}
          >
            Try now
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
