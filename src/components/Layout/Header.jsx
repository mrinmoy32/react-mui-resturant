import { useState } from "react";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import Logo from '../../images/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, } from 'react-router-dom';
import "../../styles/Header.css"

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', }}>
      <Typography color={'goldenrod'} variant='h6'
        component='div'
        sx={{ flexGrow: 1, my: 2 }}>
        {/* <FastfoodIcon />
        My Resturant */}
        <img src={Logo} height={'50'} width={'200'} alt="logo" />
      </Typography>
      <Divider />
      <ul className="mobile_navigation">
        <li>
          <NavLink activeClassName="active" to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={'/contact'}>Contact</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={'/menu'}>Menu</NavLink>
        </li>
      </ul>
    </Box>
  )

  return (
    <Box>
      <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerToggle}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography color={'goldenrod'} variant='h6' component='div' sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center'
          }}
          >
            <img src={Logo} height={'50'} width={'250'} alt="logo" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation_menu">
              <li>
                <NavLink activeClassName="active" to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={'/about'}>About</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={'/contact'}>Contact</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={'/menu'}>Menu</NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer variant="temporary" open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "240px",
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  )
}

export default Header