import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, AppBar, Menu, MenuItem, Toolbar, IconButton, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const routes = [
  {
    pageName: 'Inicio',
    path: '/',
  },
  {
    pageName: 'Servicios',
    path: '/servicios',
  },
  {
    pageName: 'Contacto',
    path: '/contacto',
  },
]

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {routes.map(route => (
                <MenuItem
                  key={route.path}
                  onClick={handleCloseNavMenu}
                    component={Link}
                    to={route.path}>
                  <Typography textAlign="center">{route.pageName}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box
            justifyContent='flex-end'
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {routes.map(route => (
              <Button
                key={route.path}
                component={Link}
                to={route.path}
                color='inherit'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mr: 2, display: 'block' }}
              >
                {route.pageName}
              </Button>
            ))}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;