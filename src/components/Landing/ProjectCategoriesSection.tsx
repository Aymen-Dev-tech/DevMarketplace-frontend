import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const ProjectCategorisSections = () => {
  return (
    <Box
      sx={{
        height: "663px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "1086px",
          height: "454px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "36px",
            lineHeight: "44px",
            textAlign: "center",
          }}
        >
          Project Categories
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              boxSizing: "border-box",
              width: "274px",
              height: "350px",
              background: "#F0F0F0",
              border: "1px solid #CFCFCF",
              borderRadius: "5.5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "201.89px", height: "196px" }}>
              <img
                alt="chrome"
                src="/icons/chrome.svg"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
              />
            </Box>
            <Box sx={{ width: "171px", height: "54px" }}>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "24px",
                }}
              >
                Online Platfroms and Websites
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              boxSizing: "border-box",
              width: "274px",
              height: "350px",
              background: "#F0F0F0",
              border: "1px solid #CFCFCF",
              borderRadius: "5.5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "201.89px", height: "196px" }}>
              <img
                alt="chrome"
                src="/icons/Desktop-mobile-ico.svg"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
              />
            </Box>
            <Box sx={{ width: "141px", height: "55px" }}>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "24px",
                }}
              >
                Mobile and Desktop Apps
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              boxSizing: "border-box",
              width: "274px",
              height: "350px",
              background: "#F0F0F0",
              border: "1px solid #CFCFCF",
              borderRadius: "5.5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "201.89px", height: "196px" }}>
              <img
                alt="chrome"
                src="/icons/code-tech-dev.svg"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
              />
            </Box>
            <Box sx={{ width: "70px", height: "27px" }}>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "24px",
                }}
              >
                Scripts
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
