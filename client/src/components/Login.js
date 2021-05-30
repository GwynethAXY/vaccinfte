import {
    makeStyles, Paper, TextField, Button, Typography,
  } from '@material-ui/core';
  import React, { useCallback, useState } from 'react';
  import Web3 from 'web3';
  
  const useStyles = makeStyles(() => ({
    root: {
      width: '30%',
      margin: '0.5em',
      padding: '10px',
      textAlign: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    },
    textField: {
      width: '80%',
      textAlign: 'center',
    },
    button: {
      width: '80%',
      margin: '10px',
    },
  }));
  
  function Login({instance, accountAddress}) {
    const classes = useStyles();
    const [name, setName] = useState('');
    const handleSignUp = useCallback((type) => {
      if (type === 'Manufacturer') {
        instance.methods.createManufacturer(Web3.utils.asciiToHex(name))
          .send({ from: accountAddress})
          .then(() => {
            window.location.reload(false);
          });
      
      }
      if (type === 'HealthcareP') {
        instance.methods.createHealthcareP(Web3.utils.asciiToHex(name))
          .send({ from: accountAddress })
          .then(() => {
            window.location.reload(false);
          });
      }

      if (type === 'Individual') {
        instance.methods.createIndividual(123, Web3.utils.asciiToHex(name))
          .send({ from: accountAddress })
          .then(() => {
            window.location.reload(false);
          });
      }
    }, [accountAddress, name, instance]);
    return (
      <Paper className={classes.root} elevation={2}>
        <Typography align="center" variant="h5">
          Welcome to Vacci(NFT)e!
        </Typography>
        <TextField className={classes.textField} label="name" value={name} onChange={(event) => { setName(event.target.value); }} />
        <Button color="primary" variant="contained" className={classes.button} onClick={() => handleSignUp('Manufacturer')}>
          Sign up as manufacturer
        </Button>
        <Button color="primary" variant="contained" className={classes.button} onClick={() => handleSignUp('HealthcareP')}>
          Sign up as healthcare professional
        </Button>
        <Button color="primary" variant="contained" className={classes.button} onClick={() => handleSignUp('Individual')}>
          Sign up as patient
        </Button>
      </Paper>
    );
  }
  
  export default Login;