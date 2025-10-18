import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        mt: 6, textAlign: "center", p: 2,
        "& h4": {
          fontWeight: "bold",
          my: 2,
          fontSize: "1.3rem"
        },
        "& p": {
          textAlign: "justify"
        },
        "@media (max-width: 600px)": { mt: 0 }
      }}>
        <Typography variant='h4'>
          Contact Us
        </Typography>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel suscipit modi deserunt totam eveniet, blanditiis vitae asperiores rem odio ad animi soluta saepe ab tempore assumenda magnam ullam reprehenderit molestiae.
        </p>
      </Box>
      <Box sx={{m:2, width: '600px', "@media (max-width: 600px)": {width: "85vw"}}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact'>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align='center'
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                  <SupportAgentIcon sx={{ color: "red", fontSize: "40px" }} />
                  <span style={{ marginLeft: "10px" }}>1800-123-456</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                  <MailIcon sx={{ color: "red", fontSize: "40px" }} />
                  <span style={{ marginLeft: "10px" }}>contact@myresturant.com</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                  <CallIcon sx={{ color: "red", fontSize: "40px" }} />
                  <span style={{ marginLeft: "10px" }}>+91 9876543210</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact