import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';

const Features = () => {
  return (
    <Box bgcolor='#e0e0e0'  paddingY={8}>
      <Container maxWidth='lg'>
      <Box textAlign='center' marginBottom={5}>
          <Typography variant='h4' >Qué nos distingue?</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>
        <Grid container spacing={2}>

          <Grid item lg={4} md={6} sm={12}>
            <Paper
              sx={{
                padding: '15px',
                backgroundColor: 'black'
              }}>
                <Box>
                  <Box display='flex' marginBottom={1}>
                    <WorkspacePremiumIcon color='secondary' fontSize='large' sx={{marginRight: '10px'}} />
                    <Typography color='white' fontWeight='bold' fontSize={26}>La mejor calidad</Typography>
                  </Box>
                  <Typography variant='body2' color='#e0e0e0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet sit amet.
                  </Typography>

                </Box>
            </Paper>
          </Grid>

          <Grid item lg={4} md={6} sm={12}>
            <Paper
              sx={{
                padding: '15px',
                backgroundColor: 'black'
              }}>
                <Box>
                  <Box display='flex' marginBottom={1}>
                    <LocalShippingIcon color='secondary' fontSize='large' sx={{marginRight: '10px'}} />
                    <Typography color='white' fontWeight='bold' fontSize={26}>Distrubucion rapida</Typography>
                  </Box>
                  <Typography variant='body2' color='#e0e0e0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet sit amet.
                  </Typography>

                </Box>
            </Paper>
          </Grid>

          <Grid item lg={4} md={6} sm={12}>
            <Paper
              sx={{
                padding: '15px',
                backgroundColor: 'black'
              }}>
                <Box>
                  <Box display='flex' marginBottom={1}>
                    <StorefrontIcon color='secondary' fontSize='large' sx={{marginRight: '10px'}} />
                    <Typography color='white' fontWeight='bold' fontSize={26}>Para tu negocio</Typography>
                  </Box>
                  <Typography variant='body2' color='#e0e0e0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet sit amet.
                  </Typography>

                </Box>
            </Paper>
          </Grid>


        </Grid>

        
      </Container>
    </Box>
  );
};

export default Features;