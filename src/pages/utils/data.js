import React from "react";
import { ArrowUp, Reload, Bomb } from "../../assets/icons/index";


export const initialReceiptData = {
    receipts: [
      {
        id: 1,
        client: "LOREM IPSUM DOLOR SIT.",
        value: "R$500,00",
        status: "Lorem ipsum dolor",
        dueDate: "16/12/2020",
        icon: <ArrowUp/>
      },
      {
        id: 2,
        client: "LOREM IPSUM DOLOR SIT.",
        value: "500,00",
        status: "Lorem ipsum dolor",
        dueDate: "16/12/2020",
        icon: <Bomb/>
      },
      {
        id: 3,
       client: "LOREM IPSUM DOLOR SIT.",
       value: "500,00",
        status: "Lorem ipsum dolor",
        dueDate: "16/12/2020",
        icon: <Reload />
      },
      {
        id: 4,
        client: "LOREM IPSUM DOLOR SIT.",
        value: "",
        status: "Lorem ipsum dolor",
        dueDate: "16/12/2020",
        icon: "R$ 500,00"
      },
      {
        id: 5,
        client: "LOREM IPSUM DOLOR SIT.",
        value: "",
        status: "Lorem ipsum dolor",
        dueDate: "16/12/2020",
        icon: "R$ -20,00"
      }
    ]
  };