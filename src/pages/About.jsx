import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15, textAlign: "center", p:2,
      "& h4": {
        fontWeight: "bold",
        my:2,
        fontSize: "1.3rem"
      },
      "& p": {
        textAlign: "justify"
      },
      "@media (max-width: 600px)": {mt:0}
      }}>
        <Typography variant='h4'>
          Welcome To My Resturant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus, officiis distinctio assumenda accusantium iure ea fuga veniam, saepe soluta nobis voluptatum voluptatibus esse, delectus voluptates ipsam. Hic fuga rerum qui quam, praesentium debitis amet iure minus, omnis molestiae quo dolor error cumque distinctio quis saepe laboriosam. Libero non ipsam enim quod reprehenderit sint suscipit, quidem eius quo, iusto ducimus deserunt atque eos vel. At repellat pariatur eveniet iste quos earum maiores autem harum quas adipisci nam vel rem vitae, alias dolore. Expedita, fuga, numquam laboriosam dolorem aliquid maxime cum mollitia dicta placeat, amet perspiciatis quae? Nobis odit natus dolorum.
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio nobis quae quisquam reiciendis, sint cum maiores. Itaque ipsa aliquid ab a sapiente ratione dolorum tempora adipisci, magnam nemo hic placeat neque at saepe ut nulla nostrum nihil ipsam et ducimus assumenda expedita tenetur? Pariatur optio quam cum explicabo voluptates autem esse, impedit libero sunt dignissimos aspernatur et! Nisi, sed? Beatae adipisci vel possimus nulla qui nam maiores aperiam recusandae, id, deleniti unde iste mollitia libero esse eaque aliquam! Animi minus facilis dignissimos totam vitae nemo aliquam illo! Delectus repellat exercitationem aliquam minus eos autem praesentium mollitia molestias, ex reiciendis sed?
        </p>
      </Box>
    </Layout>
  )
}

export default About