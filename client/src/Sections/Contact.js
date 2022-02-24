import React, {useState} from 'react';
import axios from 'axios';

import { Container, Box, Typography, Paper, TextField, FormControl, InputLabel, Select, MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

const Contacto = () => {

    // Form States
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [service, setService] = useState('');

    // Form Handler
    const handleSubmit = async (e) => {
      e.preventDefault();
        setName('')
        setBrand('')
        setModel('')
        setService('')

      try{
        await axios.post('http://localhost:5000/contacto', {
          name, brand, model, service
        })
      } catch(err) {
        console.log(err);
      }
    }

  return (
    <Box bgcolor='#e0e0e0' paddingY={12} >
      <Container maxWidth='lg'>
      <Box textAlign='center' display='flex' flexDirection='column' alignItems='center' marginBottom={8}>
          <Typography variant='h3' >Comunicate con Nosotros</Typography>
          <Typography width='75%'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis lacus in est pulvinar.
          </Typography>
        </Box>
      </Container>
      <Container maxWidth='sm'>
        <Paper
          component='form'
          elevation={5}
          sx={{padding: '30px'}}
          onSubmit={handleSubmit}
        >

          <Typography variant='h5' mb={3}>Completa el cuestionario</Typography>
          <TextField
            id="name"
            label="Nombre completo"
            variant="outlined"
            fullWidth
            sx={{marginBottom: 3}}
            onChange={(e)=> setName(e.target.value)}
            value={name}
          />

          <FormControl fullWidth sx={{marginBottom: 3}}>
            <InputLabel id="brand-lable">Marca</InputLabel>
            <Select
              labelId="brand-lable"
              id="brand"
              label="marca"
              onChange={(e)=> setBrand(e.target.value)}
              value={brand}
            >
              <MenuItem value='AquaTech'>AquaTech</MenuItem>
              <MenuItem value='Drink Inc'>Drink Inc</MenuItem>
              <MenuItem value='Agua-Plus'>Agua-Plus</MenuItem>
            </Select>
          </FormControl>

          {/* Modelo */}
          <FormControl fullWidth sx={{marginBottom: 3}}>
            <InputLabel id="model-label">Modelo</InputLabel>
            <Select
              labelId="model-label"
              id="model"
              label="Modelo"
              onChange={(e)=> setModel(e.target.value)}
              value={model}
            >
              <MenuItem value='Basico'>Basico</MenuItem>
              <MenuItem value='Doble'>Doble</MenuItem>
              <MenuItem value='Triple'>Triple</MenuItem>
              <MenuItem value='Delux'>Delux</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ marginBottom: 1}}>
            <FormLabel id="service-label">Tipo de Servicio</FormLabel>
            <RadioGroup
              row
              aria-labelledby="service-label"
              name="service"
              onChange={(e)=> setService(e.target.value)}
              value={service}
            >
              <FormControlLabel value="Compra" control={<Radio />} label="Compra" />
              <FormControlLabel value="Renta" control={<Radio />} label="Renta" />
            </RadioGroup>
          </FormControl>
          <Box display='flex' justifyContent='end'>
            <Button type='submit' size='large' variant='contained'>Enviar</Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contacto;