import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Button,
  InputAdornment,
  Typography,
  IconButton
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { BankAccount } from "../assets/icons";

const ModalComponent = ({ isOpen, onClose, onConfirm }) => {
    
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    contaBancaria: "",
    contaDestino: "",
    descricao: "",
    transferencia: "",
    valor: "",
  });


  const handleConfirmClick = () => {
    
    setFormData({
      contaBancaria: "",
      contaDestino: "",
      descricao: "",
      transferencia: "",
      valor: "",
    });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Typography fontWeight={600}  variant="h6">Lorem ipsum dolor sit.</Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          disableRipple
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'gray',
            '&:hover': {
              color: 'lightblue',
            },
          }}
        >
          <CloseIcon fontSize="lg" sx={{ fontWeight: 600 }} />
        </IconButton>
        <hr/>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" gap={2} mb={2} marginTop={2}>
        
        <TextField
  select
  label="Nome da Conta"
  name="Nome da Conta"
  fullWidth
  required
  value=""
  InputLabelProps={{
    shrink: true,
  }}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <BankAccount /> {/* Ícone ou componente */}
      </InputAdornment>
    ),
  }} 
>
  <MenuItem value="" disabled>Nome da conta</MenuItem>
  <MenuItem value="teste1">Teste</MenuItem>
</TextField>
          <TextField
            select
            label="Conta destino"
            name="contaDestino"
            fullWidth
            required
            InputLabelProps={{
                shrink: true,
              }}
          >
            <MenuItem value="" disabled>
              Selecione
            </MenuItem>
            <MenuItem value="teste2">teste</MenuItem>
          </TextField>
        </Box>
        <TextField
          label="Descrição"
          name="descricao"
          placeholder="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et."
          fullWidth
          required
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Box display="flex" gap={2} mb={2} mt={1}>
          <TextField
            label="Transferência"
            type="date"
            name="transferencia"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
          <TextField
            label="Valor"
            placeholder="1.500,00"
            type="number"
            name="valor"
            fullWidth
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>,
            }}
            required
            
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{
            justifyContent: 'space-between',
           
          }}>
        <Button onClick={onClose} variant="outlined" backgroundColor="rgba(241, 244, 249, 1)" size="large" color="#000"
        sx={{
            alignItems: 'center',
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': {
    backgroundColor: '#f5f5f5',
  },
            
           
          }}>
          Cancelar
        </Button>
        <Button
          onClick={handleConfirmClick}
          variant="contained"
          color="primary"
          disabled={!isFormValid}
          size="large"
          sx={{
            alignItems: 'center',
            textTransform: 'none'
           
          }}
        >
          Salvar e enviar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalComponent;