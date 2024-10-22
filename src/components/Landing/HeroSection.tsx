import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
export const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "#E9F3FF",
        height: "100vh"
      }}
    >
      <Box
        sx={{
          marginLeft: "11.5%",
          marginRight: "11.5%",
          display: "flex",
          alignItems: "center",
          gap: "86px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "642.49px",
              height: "95.71px",
            }}
          >
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "39.6058px",
                lineHeight: "48px",
              }}
            >
              Discover, Create, and Monetize Your Digital Creations
            </Typography>
          </Box>
          <Box
            sx={{
              width: "530.49px",
              height: "51.71px",
              overflowWrap: "break-word",
            }}
          >
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "22.0032px",
                lineHeight: "27px",
                color: "#595959",
              }}
            >
              Join Our Online Marketplace to Sell and Purchase High-Quality
              Digital Products
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "140px",
              height: "58px",
              background: "#23A6F0",
              borderRadius: "5px",
              gap: "16.5px",
            }}
          >
            <Link
              href={`${location.protocol + "//" + location.host}/signup`}
              underline="none"
              sx={{
                color: "#fff",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "31px",
              }}
            >
              Register
            </Link>
            <img alt="arrow-right" src="/icons/arrow-right.svg" />
          </Box>
        </Box>
        <Box>
          <img
            alt="hero-illustration"
            src="/illustrations/illustration-1.svg"
          />
        </Box>
      </Box>
    </Box>
  );
};
