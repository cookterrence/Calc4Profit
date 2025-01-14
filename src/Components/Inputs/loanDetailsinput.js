import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PercentIcon from '@mui/icons-material/Percent';
import InputAdornment from '@mui/material/InputAdornment';


export default function LoanDetailInput() {
  return (
    <>
    <h2>Loan Details</h2>
    <FormGroup>
      <h3>Down Payment</h3>
      <FormControlLabel control={<Checkbox />} label="0%" />
      <FormControlLabel control={<Checkbox />} label="10%" />
      <FormControlLabel control={<Checkbox />} label="20%" />
      <FormControlLabel control={<Checkbox />} label="25%" />
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="interestRate" label='Interest Rate' variant="filled" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PercentIcon/>
            </InputAdornment>
          )
        }}/> 
        <TextField id="loanTerm" label='Loan Term' variant="filled" /> 
      </Box>
    </FormGroup>
    
    </>
  );
}