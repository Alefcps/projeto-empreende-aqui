import React from 'react';
import  { useState } from 'react';
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  TextField,
  Select,
  MenuItem,
  Grid,
  Button,
  InputAdornment,
  Paper
} from '@mui/material';
import {
  Breadcrumb,
  Header,
  Drawer,
  Modal,
  AdsCard,
  ReceiptCard
} from '../../components/index';
import { ArrowUp, Reload, Bomb, Menu, BankAccount, Search } from "../../assets/icons/index";
import { useWindowWidth } from "../utils/useWindowWidth";
import { initialReceiptData } from '../utils/data';

const ReceiptScreen = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [clickedCardId, setClickedCardId] = useState(null);
  const [receipts, setReceipts] = useState(initialReceiptData.receipts);

  const windowWidth = useWindowWidth();

  const handleCardClick = (id) => {
    setClickedCardId(clickedCardId === id ? null : id);
  };

  
  const renderIcon = (id) => {
    const receipt = initialReceiptData.receipts.find((item) => item.id === id);
    return receipt?.icon || "Sem ícone"; 
  };
  
  
  // Array com valores fixos em centavos
  const fixedValues = [1000, 500, 500, 2000];
  // Formata os valores para reais
const formattedValues = fixedValues.map(value =>
  (value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
);
  const cardItems = [
    {
      id: 1,
      title: "Recebidas",
      icon: <ArrowUp />,
      value: 1,
      total: formattedValues[0],
    },
    {
      id: 2,
      title: "Em aberto",
      icon: <Reload />,
      value: 1,
      total: formattedValues[1]
    },
    {
      id: 3,
      title: "Vencidas",
      icon: <Bomb />,
      value: 1,
      total: formattedValues[2]
    },
    {
      id: 4,
      title: "Total",
      icon: <Menu />,
      value: 3,
      total: formattedValues[3]
    },
  ];

  return (
    <>
    <Drawer />
    <Header />
    <Box
      display="flex"
      flexDirection={windowWidth < 768 ? "column" : "row"}
      alignItems={windowWidth < 768 ? "center" : undefined}
      gap={2}
      marginLeft={windowWidth < 768 ? "90px" : "100px"}
    >
      <Box  
        display="flex"
        flexDirection="column"
        marginTop="100px"
        width="100%"
        gap="30px"
        >
        <Breadcrumb />
        <Box 
          display="flex"
          flexDirection={windowWidth < 768 ? "column" : "row"}
          justifyContent={windowWidth < 768 ? "center" : "space-around"}
          alignItems="center"
          gap="10px"
        >
          <Box width="50%"  >
          <Button
            variant="contained"
            endIcon=""
            fullWidth
            onClick={() => setIsOpen(true)}
            sx={{
              textTransform: "none",
              backgroundColor: "#00B050", 
              "&:hover": {
                backgroundColor: "#115293", 
              },
            }}
            
          >
            Novo recebimento
          </Button>
        </Box>
          <Box  width="100%" display="flex" alignItems="center" gap={1}  xs={4}>
          <Select
            variant="outlined"
            size="small"
            displayEmpty
            defaultValue=""
            fullWidth
          >
            <MenuItem disabled value="">
              <Box display="flex" alignItems="center" gap={1} > 
              <InputAdornment position="end">
                  <BankAccount/>
                </InputAdornment>
                Nome da Conta
              </Box>
            </MenuItem>
          </Select>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Pesquisar"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          </Box>
        </Box>
        
        <Grid container spacing={windowWidth < 768 ? 2 : 4} width="100%">
          {cardItems.map((item, index) => (
            <Grid item xs={12} sm={3} md={3} key={index}>
              <ReceiptCard 
              id={item.id}
              title={item.title} 
              icon={item.icon} 
              total={item.total} 
              value={item.value}
              isClicked={clickedCardId === item.id}
              onClick={handleCardClick}
              />
            </Grid>
          ))}
        </Grid>

        <Box marginTop={2}>
          <TableContainer component={Paper} >
            <Table>
              <TableHead>
                <TableRow style={{ backgroundColor: "rgba(0, 62, 124, 1)"}}>
                  <TableCell padding="checkbox"><Checkbox /></TableCell>
                  <TableCell style={{ color: "white" }}>Emissão</TableCell>
                  <TableCell style={{ color: "white" }}>Cliente</TableCell>
                  <TableCell style={{ color: "white" }}>Categoria</TableCell>
                  <TableCell style={{ color: "white" }}>Valor</TableCell>
                  <TableCell style={{ color: "white" }}>Situação</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {receipts.map(receipt => (
                  <TableRow key={receipt.id}>
                    <TableCell padding="checkbox"><Checkbox /></TableCell>
                    <TableCell>{receipt.dueDate}</TableCell>
                    <TableCell>{receipt.client}</TableCell>
                    <TableCell>{receipt.status}</TableCell>
                    <TableCell>{"+R$" + receipt.value}</TableCell>
                    <TableCell>{renderIcon(receipt.id)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <AdsCard />
    </Box>
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    
  </>
  
  )
};


export default ReceiptScreen;
  