import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PercentIcon from '@mui/icons-material/Percent';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


export default function PurchaseInput() {

  return (
    <>
      <h2>Purchase Information</h2>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="purchasePrice" label='Purchase Price' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}/> 
        <TextField id="purchaseClosingCost" label='Purchase Closing Cost' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PercentIcon/>
            </InputAdornment>
          )
        }}/> 
      </Box>
    </>
  );
}