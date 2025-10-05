import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box>
      <AppBar component={'nav'} sx={{bgcolor: 'black'}}>
        <Toolbar>
        <Typography>
          Header
        </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header