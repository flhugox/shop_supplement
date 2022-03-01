
import * as React from 'react';
import {  NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} >
                <img width="80" height="80" src="https://image.shutterstock.com/image-vector/vitamin-c-icon-pill-capsule-600w-1543259795.jpg"></img>
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
              <NavLink to="/" className="navbarListItem">
                <MenuItem>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </NavLink>
              <NavLink to="category/vitaminas" className="navbarListItem">
                <MenuItem>
                  <Typography textAlign="center">Vitaminas</Typography>
                </MenuItem>
              </NavLink>
              <NavLink to="category/suplementos" className="navbarListItem">
                <MenuItem>
                  <Typography textAlign="center">Suplementos</Typography>
                </MenuItem>
              </NavLink>
              <NavLink to="category/creatina" className="navbarListItem">
                <MenuItem>
                  <Typography textAlign="center">Creatina</Typography>
                </MenuItem>
              </NavLink>
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <NavLink to="/" className="navbarListItem">
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Home
              </Button>
            </NavLink>
            <NavLink to="category/vitaminas" className="navbarListItem">
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Vitaminas
              </Button>
            </NavLink>
            <NavLink to="category/suplementos" className="navbarListItem">
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Suplementos
              </Button>
            </NavLink>
            <NavLink to="category/creatina" className="navbarListItem">
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Creatina
              </Button>
            </NavLink>
          </Box>
          <CartWidget></CartWidget>
        </Toolbar>
      </Container>
    </AppBar>


  );
}
export default Navbar