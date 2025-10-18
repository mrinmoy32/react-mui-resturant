import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GithubIcon from '@mui/icons-material/Github';
import YouTubeIcon from '@mui/icons-material/YouTube';

import React from 'react'

const Footer = () => {
  return (
    <>
        <Box sx={{textAlign: "center", bgcolor:'#1A1A19', color: 'white', p: 3}}>
            <Box sx={{my: 3, "& svg": {
                fontSize: "2.1rem",
                cursor: "pointer",
                mr: 2
            },
            "& svg:hover": {
                color: 'goldenrod',
                transform: 'translateY(-5px)',
                transition: 'all 400ms',
            }
            }}>
                {/* icons */}
                <InstagramIcon />
                <TwitterIcon />
                <GithubIcon />
                <YouTubeIcon />
            </Box>
            <Typography 
            variant='h7'
            sx={{"@media (max-width: 600px)": {
                fontSize: "0.8rem",

            }}}
            >
                All Rights Reserved &copy; Mrinmoy Pal
            </Typography>
        </Box>
    </>
  )
}

export default Footer