import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { ChevronRight, ExpandMore } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { useWindowWidth } from "../pages/utils/useWindowWidth";

const menuItems = [
  { path: "/", name: "INÍCIO", icon: false },
  { path: "#", name: "LOREM", icon: true },
  { path: "#", name: "LOREM-IPSUM", icon: true },
  { path: "#", name: "IPSUM LOREM SUM", icon: true },
  { path: "#", name: "LOREM", icon: true },
  { path: "/recebimento", name: "RECEBIMENTO", icon: true },
];

const Header = () => {
  const location = useLocation();
  const width = useWindowWidth();

  return (
    <Box
      position="fixed"
      top={0}
      left="80px"
      bgcolor="#001B37"
      color="white"
      display="flex"
      flexDirection="row"
      alignItems="center"
      width="100%"
      height="70px"
      gap={width < 768 ? 0 : 2}
      zIndex={1000}
      px={2}
    >
      {menuItems.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          underline="none"
          sx={{ ml: 2 }}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={1}
            color={item.path === location.pathname ? "rgba(0, 193, 235, 1)" : "white"}
          >
            <Typography fontSize="14px" fontWeight={700}>
              {item.name}
            </Typography>
            {item.icon && (
              item.path === location.pathname ? (
                <ChevronRight fontSize="small" />
              ) : (
                <ExpandMore fontSize="small" />
              )
            )}
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default Header;
