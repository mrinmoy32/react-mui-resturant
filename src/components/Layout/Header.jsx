import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import "../../styles/Header.css"

const Header = () => {
  return (
    <Box>
      <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
        <Toolbar>
          <Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow: 1}}>
            <FastfoodIcon />
            My Resturant
          </Typography>
          <Box sx={{display: {xs: "none", sm: "block" }}}>
            <ul className="navigation_menu">
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
              <li>
                <Link to={'/menu'}>Menu</Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header