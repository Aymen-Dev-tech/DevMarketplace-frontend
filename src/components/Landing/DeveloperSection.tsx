import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const DeveloperSection = () => {
  return (
    <Box
      sx={{
        height: "663px",
        display: "flex",
        bgcolor: "#E9F3FF",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          marginLeft: "11.5%",
          marginRight: "11.5%",
          display: "flex",
          alignItems: "center",
          gap: "300px",
        }}
      >
        <Box sx={{ width: "380.07", height: "367.95" }}>
          <img alt="developer" src="/illustrations/Developer.svg" />
        </Box>
        <Box
          sx={{
            width: "463px",
            height: "559.8px",
            boxSizing: "border-box",
            background: "#FFFFFF",
            border: "0.676901px solid #D7D7D7",
            boxShadow: "-15px 10px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "33.845px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              width: "300.54px",
              height: "81.23px",
              boxSizing: "border-box",
              background: "#FFFCFC",
              borderWidth: "4.0614px 4.0614px 4.0614px 0px",
              borderStyle: "solid",
              borderColor: "#12B28C",
              borderRadius: "0px 47.383px 47.383px 0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "21.6608px",
                lineHeight: "26px",
              }}
            >
              How it benefits developers
            </Typography>
          </Box>
          <Box
            sx={{
              width: "400px",
              height: "276.18px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginLeft: "38.49px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "16.87px",
                alignItems: "center",
              }}
            >
              <img alt="check" src="/icons/checkMarke.svg" />

              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "22.2109px",
                  lineHeight: "27px",
                  textTransform: "capitalize",
                }}
              >
                Share Your Experience
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "16.87px",
                alignItems: "center",
              }}
            >
              <img alt="check" src="/icons/checkMarke.svg" />

              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "22.2109px",
                  lineHeight: "27px",
                  textTransform: "capitalize",
                }}
              >
                Build your marketplace
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "16.87px",
                alignItems: "center",
              }}
            >
              <img alt="check" src="/icons/checkMarke.svg" />

              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "22.2109px",
                  lineHeight: "27px",
                  textTransform: "capitalize",
                }}
              >
                Monetization opportunities
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "16.87px",
                alignItems: "center",
              }}
            >
              <img alt="check" src="/icons/checkMarke.svg" />

              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "22.2109px",
                  lineHeight: "27px",
                  textTransform: "capitalize",
                }}
              >
                You may Get Hired
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
