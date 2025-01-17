import React from "react";
import { Box, Typography, Button } from "@mui/material";

const AdsCard = () => {
  return (
    <Box
      sx={{
        height: "100%",
        marginTop: "100px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "60px",
        maxWidth: "260px",
        padding: "10px",
      }}
    >
      <Box 
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            borderRadius: "25px",
            padding: "8px 16px",
            backgroundColor: "rgba(215, 58, 8, 1)",
          }}
        >
          <Typography color="white">
            Lorem.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "17px",
            height: "12px",
            backgroundColor: "rgba(255, 100, 7, 1)",
            clipPath: "polygon(50% 100%, 0 0, 100% 0)",
            borderRadius: "5px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        <Box 
          sx={{
            width: "12px",
            height: "60px",
            backgroundColor: "rgba(255, 0, 102, 1)",
          }}
        />
        <Typography 
          sx={{
            fontWeight: 700,
            fontSize: "35px",
          }}
        >
          Lorem ipsum.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Typography 
          sx={{
            fontSize: "25px",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Lorem ipsum.
        </Typography>
        <Typography sx={{ fontSize: "23px" }}>
          R$
          <Typography 
            component="span" 
            sx={{ fontSize: "35px" }}
          >
            78
          </Typography>
          ,85
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "18px" }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut.
        </Typography>
      </Box>
      <Button
        sx={{
          backgroundColor: "rgba(0, 39, 78, 1)",
          color: "white",
          borderRadius: "25px",
          width: "100%",
          '&:hover': {
            backgroundColor: "#06488b",
          },
        }}
      >
        Lorem ipsum.
      </Button>
    </Box>
  );
};

export default AdsCard;
