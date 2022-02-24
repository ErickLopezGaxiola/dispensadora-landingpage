import { Container, Box, Typography, Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import DrinkImage from '../Images/Drink.png'
import Features from './Features';


const useStyles = makeStyles( theme => ({
  buttonContainer: {
    display: 'flex',
    [theme.breakpoints.down("md")]: {
      justifyContent: 'center',
    },
  },
  imageContainer: {
    display:'flex',
    justifyContent:'center',
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      width: '85%'
    },
  },
  mainHeading: {
    [theme.breakpoints.down("sm")]: {
      fontSize: '2.5rem',
    },
  }
}));

const Home = () => {

  const classes = useStyles();

  return (
    <Box>
      <Box paddingY={18} >
        <Container maxWidth='lg'>
          <Grid container>
            <Grid item md={6} sm={12} xs={12}>
              <Box>
                <Typography
                  variant='h2'
                  lineHeight={1}
                  fontWeight='400'
                  marginBottom={2}
                  className={classes.mainHeading}
                >
                  La <Box component='span' fontWeight='bold'>mejor</Box> empresa despachadora de agua en <Box component='span' fontWeight='bold'>Mexico</Box>
                </Typography>
                <Typography
                  variant='body1'
                  fontSize={18}
                  marginBottom={4}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Box className={classes.imageContainer}>
                <Box
                className={classes.image}
                  component='img'
                  src={DrinkImage} />
              </Box>
            </Grid>
          </Grid>
          <Box>
            <Box className={classes.buttonContainer}>
              <Button
                component={Link}
                to='/servicios'
                variant='contained'
                sx={{marginRight: '15px',}}
              >
                Servicio
              </Button>
              <Button
                component={Link}
                to='/contacto'
                variant='outlined'
              >
                Contacto
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    <Features />
    </Box>
  );
};

export default Home;