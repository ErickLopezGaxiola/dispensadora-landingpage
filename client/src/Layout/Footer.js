import { Container, Box, Typography, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const useStyles = makeStyles( theme => ({
    footerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      },
    },
}));

const Footer = () => {

  const classes = useStyles();

  return (
    <Box
      bgcolor='black'
      height='60px'
      paddingY={8}
    >
      <Container maxWidth='lg'>
        <Box className={classes.footerContainer}>
          <Box>
            <Typography
              color='white'
              fontWeight='600'>
                Talents Code Challenge
            </Typography>
            <Typography
              color='secondary'
              fontWeight='light'
              fontSize={12}>
                by Erick Lopez Gaxiola
            </Typography>
          </Box>
          <Box>
            <IconButton
              color='secondary'
              sx={{marginRight: '10px'}}>
              <FacebookIcon />
            </IconButton>
            <IconButton
              color='secondary'
              sx={{marginRight: '10px'}}>
            <TwitterIcon />
             </IconButton>
            <IconButton color='secondary'>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;