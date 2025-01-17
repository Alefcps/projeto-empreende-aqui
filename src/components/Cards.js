import React from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import { Airplane, Analytics, Key, Message, People, Receipt } from "../assets/icons/index";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../pages/utils/useWindowWidth";

const cardItems = [
  {
    title: "Início",
    svg: <Airplane />,
    path: "/",
    alt: "Ícone de Avião",
  },
  {
    title: "Lorem",
    svg: <Message />,
    path: "/",
    alt: "Ícone de Mensagem",
  },
  {
    title: "Lorem-ipsum",
    svg: <Key />,
    path: "/",
    alt: "Ícone de Chave",
  },
  {
    title: "Recebimento",
    svg: <Receipt />,
    path: "/recebimento",
    alt: "Ícone de Recebimento",
  },
  {
    title: "Ipsum Lorem Sum",
    svg: <People />,
    path: "/",
    alt: "Ícone de Pessoas",
  },
  {
    title: "Lorem",
    svg: <Analytics />,
    path: "/",
    alt: "Ícone de Analytics",
  },
];

const CardComponent = () => {
  const windowWidth = useWindowWidth();
  let breakPoint;

  if (windowWidth < 768) {
    breakPoint = 1;
  } else if (windowWidth >= 768 && windowWidth <= 1200) {
    breakPoint = 2;
  } else {
    breakPoint = 6;
  }

  return (
    <Grid container spacing={3}>
      {cardItems.map((item, index) => (
        <Grid item xs={12 / breakPoint} key={index}>
          <Link to={item.path} style={{ textDecoration: "none" }}>
            <Card
              sx={{
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px",
                boxShadow: 3,
                borderRadius: "5px",
                borderWidth: "1px",
                borderColor: "rgba(0, 39, 78, 0.4)",
                "&:hover": {
                  backgroundColor: "rgba(0, 39, 78, 0.3)",
                },
              }}
              variant="outlined"
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>{item.svg}</Box>
              <Typography
                variant="body2"
                fontWeight="600"
                sx={{ marginTop: "10px", fontSize: "14px", textAlign: "center",  whiteSpace: "nowrap"  }}
              >
                {item.title}
              </Typography>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardComponent;