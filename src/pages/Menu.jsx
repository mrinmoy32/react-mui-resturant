import React from 'react';
import { MenuList } from '../data/data';
import Layout from '../components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {MenuList.map(menu => (
          <Card sx={{maxWidth: "370px", m:2}}>
            <CardActionArea>
              <CardMedia sx={{minHeight: '400px'}} component='img' src={menu.image} alt={menu.name}/>
              <CardContent>
                <Typography variant='h5' gutterBottom component='div'>
                  {menu.name}
                </Typography>
                 <Typography variant='nody2' component='div'>
                  {menu.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  )
}

export default Menu