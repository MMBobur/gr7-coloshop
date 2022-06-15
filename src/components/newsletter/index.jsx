import React from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

function Newsletter() {
  return (
    <>
      <Grid sx={{ backgroundColor: '#E3E3E3', height: '100%' }}>
        <Container maxWidth='md'>
          <Grid container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Grid md={6} sm={6} xs={12} pt='2%' pb='2%'>
              <Typography color='#282828' sx={{ fontSize: '24px', fontWeight: 500 }}>
                Newsletter
              </Typography>
              <Typography mt='-1%' color='#51545f' sx={{ fontFamily: 'Poppins ,sans-serif' }}>
                Subscribe to our newsletter and get 20% off your  
              </Typography>
            </Grid>
            <Grid md={6} sm={6} xs={12} pt='2%' sx={{display:'flex',flexDirection:'row'}}>
              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' ,borderRadius:'0px'}}
              >

                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Your email"
                  inputProps={{ 'aria-label': 'Your email' }}
                />


              </Paper>
                <Button variant='contained' sx={{ borderRadius: '0px', backgroundColor: '#FE4C50' }}>
                  SUBSCRIBE
                </Button>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  )
}

export default Newsletter