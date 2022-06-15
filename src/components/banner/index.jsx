import React from 'react'
import banner from './asset/banner.webp'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function Banner() {
  return (
    <>
    <Grid sx={{
      backgroundImage:`url(${banner})`,
      backgroundSize:'100%',
      width:'100%',
      height:'300px',
      backgroundRepeat:'no-repeat',
      pt:'10%',
      pb:'2%'
      
      }}>
        <Container maxWidth='md'>
          <Grid container>

          <Grid md={12} xs={12} width='100%' >
            <Typography variant='h6' sx={{color:'#282828',fontSize:'14px',fontFamily:'inherit'}}>
            SPRING / SUMMER COLLECTION 2017
            </Typography>
            <Typography sx={{color:'#282828',fontSize:'250%'}}>
            Get up to 30% Off
            </Typography>
            <Typography mt='-2%' sx={{color:'#282828',fontSize:'250%'}}>
            New Arrivals
            </Typography>

            <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'#FE4C50'}}>
              Shop Now
            </Button>
          </Grid>
          </Grid>

        </Container>

    </Grid>
    </>
  )
}

export default Banner