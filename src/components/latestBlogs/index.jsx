import {
  Box,
  Container,
  LinearProgress,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton
} from "@mui/material";
import React from "react";
import "./Last.css";
import img from "../img/img.jpg";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import StormIcon from '@mui/icons-material/Storm';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';



const LatasBlogs = () => {
  return (
    <>
      <Paper sx={{ height: "500px" }}>
        <Container>
          <Box>
            <Typography
              variant="h3"
              sx={{ textAlign: "center", fontWeight: "bold", pt: "5%" }}
            >
              Latest Blogs
            </Typography>
          </Box>
          <Box
            style={{ textAlign: "center" }}
            ml={{ lg: "45%", md: "45%", sm: "45%", xs: "43%" }}
          >
            <LinearProgress
              variant="h3"
              color="error"
              sx={{
                fontWeight: "bold",
                width: "100px",
                mt: "5%",
              }}
            ></LinearProgress>
          </Box>
          <Grid container spacing={2}>
            <Grid lg={4} md={4} sm={12} xs={12}>
              <Box className="container">
                <Box className="box">
                  <Box className="imgBox">
                    <img className="img" src={img} />
                  </Box>
                  <Box className="details">
                    <Box className="content">
                      <h2>Here are the trends I see coming this fall</h2>
                      <p>BY ADMIN | DEC 01, 2017</p>
                      <Button color="error">Read more</Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid lg={4} md={4} sm={12} xs={12}>
              <Box className="container">
                <Box className="box">
                  <Box className="imgBox">
                    <img className="img" src={img1} />
                  </Box>
                  <Box className="details">
                    <Box className="content">
                      <h2>Here are the trends I see coming this fall</h2>
                      <p>BY ADMIN | DEC 01, 2017</p>
                      <Button>Read more</Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid lg={4} md={4} sm={12} xs={12}>
              <Box className="container">
                <Box className="box">
                  <Box className="imgBox">
                    <img className="img" src={img2} />
                  </Box>
                  <Box className="details">
                    <Box className="content">
                      <h2>Here are the trends I see coming this fall</h2>
                      <p>BY ADMIN | DEC 01, 2017</p>
                      <Button>Read more</Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      <Paper
        style={{ width: "100%", height: "120%", background: "#f3e5f5" }}
        sx={{ mt: {
            lg:"5%",
            md:"5%",
            sm:"140%",
            xs:"200%",
            l:"250%"
        }, mb: "5%" }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid lg={6} md={6} sm={12} xs={12}>
            <Box
                            ml={{lg:"10%",md:"10%",sm:"25%",xs:"15%"}}
 
                >

              <Typography
                variant="h4"
                sx={{ position: "absolute", pt: "1%", pb: "2%" }}
                ml={{lg:0,md:0,sm:"25%",xs:"25%"}}

              >
                Newsletter
              </Typography><br />
              <Typography
                sx={{ position: "absolute", pb: "1%" }}
                pt={{lg:"4%",md:"4%",sm:"5%",xs:"7%"}}
              >
                Subscribe to our newsletter and get 20% off your first purchase


              </Typography>
              </Box>
            </Grid>

            <Grid lg={6} md={6} sm={12} xs={12}
            pt={{lg:"4%",md:"3%",sm:"10%",xs:"18%"}}
            pb={{lg:"1%",md:"1%",sm:"2%",xs:"2%"}}
            >
                <Box
                            ml={{lg:"10%",md:"10%",sm:"30%",xs:"20%"}}
 
                >
            <TextField id="outlined-basic" label="Outlined" variant="outlined"sx={{width:"300px"}} 
            />
              <Button variant="contained"color="error"size="large"sx={{pt:"3%",}}
              >Subscribe</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Container sx={{pb:"5%"}}
      >
          <Grid container spacing={2}>
                <Grid lg={1}md={1}sm={4}xs={12}
          pl={{lg:0,md:"5%",sm:"30%",xs:"50%"}}
                
                >
                    <Button >Blog</Button>
                </Grid>
                <Grid lg={1}md={1}sm={4}xs={12}
          pl={{lg:0,md:"2%",sm:"15%",xs:"50%"}}
                
                >
                    <Button>FAQs</Button>
                </Grid>
                <Grid lg={1.2}md={1.5}sm={4}xs={12}
          pr={{lg:0,md:0,sm:"15%"}}
          pl={{lg:0,md:0,sm:0,xs:"47%"}}

                
                >
                    <Button>Contact us</Button>
                </Grid>
                <Grid lg={6.5}md={6}sm={12}xs={12}
                pl={{lg:"50%",md:"45%",sm:"45%",xs:"35%"}}
                >
                    <IconButton sx={{gap:"1rem"}}>
                        <FacebookOutlinedIcon />
                        <TwitterIcon  />
                        <InstagramIcon />
                        <MonetizationOnIcon />
                        <StormIcon />
                    </IconButton>
                </Grid>

          </Grid>
          <Box
          pt={{lg:"5%",md:"5%",sm:"30%",xs:"30%"}}
          pl={{lg:0,md:"5%",sm:"5%",xs:"5%"}}
          >
              <Typography>
              ©2018 All Rights Reserverd. This template is made with  by Colorlib
              </Typography>
          </Box>
      </Container>
    </>
  );
};

export default LatasBlogs;
