import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { useAuth } from "../hooks/useAuth";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Profile() {
  const { auth } = useAuth();

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: "538px",
          height: "617px",
          borderRadius: "50px",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          boxShadow: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "71px",
            textAlign: "center",
          }}
        >
          <Avatar
            alt={auth.name.split(" ")[0]}
            src={auth.profilePicture}
            sx={{ width: 100, height: 100, marginBottom: "32px" }}
          />
          <Typography sx={{ fontSize: "30px" }}> {auth.name} </Typography>
          <Typography> {auth.Seller?.exp} </Typography>
          <Typography
            sx={{
              margin: "26px 0px 23px 0px",
              inlineSize: "450px",
              overflowWrap: "break-word",
            }}
          >
            Dynamic software engineer skilled in full-stack development.
            Passionate about crafting efficient solutions and staying current
            with emerging technologies.
          </Typography>
          <Box
            sx={{
              width: "275px",
              height: "44px",
              backgroundColor: "#26235C",
              borderRadius: "10px",
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                color: "white",
                fontSize: "20px",
              }}
            >
              {" "}
              {auth.email}{" "}
            </Typography>
          </Box>
          <Box sx={{ marginTop: "34px", width: "408px", height: "39px" }}>
            <img src="/icons/Social-Media-Icons.svg" />
          </Box>
        </Box>
      </Paper>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "-5rem" }}
      >
        <img src="/icons/Rectangle.svg" />
      </Box>
    </>
  );
}
