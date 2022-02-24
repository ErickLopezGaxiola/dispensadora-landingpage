import { Container, Box, Typography, Grid, Paper, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  benefitContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
  butttonContainer: {
    display: 'flex',
    [theme.breakpoints.down("sm")]: {
      justifyContent: 'center',
    },
  },
  numberMargin: {
    marginRight: '20px',
    [theme.breakpoints.down("sm")]: {
      marginRight: '0',
    },
  },
}))

const services = [
  {
    serviceType: 'Venta',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis lacus in est pulvinar, sit amet egestas neque aliquet. Sed rhoncus varius rutrum.',
    benefits: [
      {
        number: 1,
        title: 'Contactanos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        number: 2,
        title: 'Escoge el modelo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        number: 3,
        title: 'Proceso de pago',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ]
  },
  {
    serviceType: 'Renta',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis lacus in est pulvinar, sit amet egestas neque aliquet.',
    benefits: [
      {
        number: 1,
        title: 'Contactanos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        number: 2,
        title: 'Entrega los lunes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        number: 3,
        title: 'Se retira en dos semanas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ]
  }
]

const Services = () => {

  const classes = useStyles();

  return (
  <Box>
    <Box paddingTop={12} >
      <Container maxWidth='lg'>
        <Box textAlign='center' display='flex' flexDirection='column' alignItems='center' marginBottom={8}>
          <Typography variant='h3' >Nuestros Servicios</Typography>
          <Typography width='75%'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis lacus in est pulvinar, sit amet egestas neque aliquet. Sed rhoncus varius rutrum.
          </Typography>
        </Box>
      </Container>
    </Box>

        <Box bgcolor='#e0e0e0' paddingTop={4} paddingBottom={12}>
          <Container maxWidth='lg'>
            <Grid container spacing={5}>
            {services.map((service, serviceId) => (
              <Grid item md={6} sm={12} key={`service-${serviceId}`}>
              <Typography variant='h4' fontWeight='600'>{service.serviceType} de dispensadores</Typography>
              <Typography >
              {service.description}
              </Typography>
              <Paper elevation={5}
              sx={{
                margin: '30px 0',
                padding: '10px 30px'
              }}>
                {service.benefits.map((benefit, benefitId) => (
                  <Box key={`benefit-${benefitId}`} className={classes.benefitContainer}>
                    <Box
                      minWidth='60px'
                      height='60px'
                      bgcolor='secondary.main'
                      display='flex'
                      justifyContent='center'
                      alignItems='center'
                      color='white'
                      className={classes.numberMargin}
                      sx={{borderRadius: '50%',}}
                    >
                      <Typography color='black' fontSize={24} fontWeight='bold'>{benefit.number}</Typography>
                    </Box>
                    <Box>
                      <Typography fontSize={24} fontWeight='600'>{benefit.title}</Typography>
                      <Typography variant='body1'>{benefit.description}</Typography>
                    </Box>
                  </Box>
                ))}
              </Paper>
              <Box className={classes.butttonContainer}>
                <Button
                  component={Link}
                  to='/contacto'
                  variant='contained'
                  >
                    Contactanos
                </Button>
              </Box>
              </Grid>
            ))}
          </Grid>
          </Container>
        </Box>
      </Box>
  );
};

export default Services;