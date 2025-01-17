import React from "react";
import { Box, Typography, Divider } from "@mui/material";


const ReceiptCard = ({ id, title, value, total, icon, isClicked, onClick }) => {
  

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={3} 
      border={`1px solid ${
        isClicked ? "rgba(255, 100, 7, 1)" : "rgba(0, 39, 78, 0.5)"
      }`}
      borderRadius="5px"
      padding="13px 30px"
      transform={isClicked ? "scale(1.05)" : "scale(1)"}
      transition="transform 0.2s, border-color 0.2s"
      sx={{
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      onClick={() => onClick(id)}
    >
      <Typography variant="body1" textAlign="center">
        {title}
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap={1} // 10px
      >
        {icon}
        <Typography variant="body1">{value}</Typography>
      </Box>
      <Divider
        sx={{
          backgroundColor: "rgba(0, 39, 78, 0.5)",
        }}
      />
      <Typography variant="body2" textAlign="center">
        {total}
      </Typography>
    </Box>
  );
};

export default ReceiptCard;
