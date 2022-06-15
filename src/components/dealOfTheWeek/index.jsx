import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Img from "./img/xdeal_ofthe_week.png.pagespeed.ic.XO-8sFC10E.png";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
function DealOfTheWeek() {
  const [s, setS] = useState(60);
  const [m, setM] = useState(45);
  // useEffect(() => {
  setInterval(() => {
    if (s == 0) {
      setS(60);
      setM(m - 1);
      setS(s - 1);
    } else {
      setS(s - 1);
    }
  }, 1000);
  // }, []);
  return (
    <div style={{ backgroundColor: "#f2f2f2", marginTop: "41px" }}>
      <Container>
        <Grid
          container
          sx={{
            backgroundImage: `url(${Img})`,
            backgroundRepeat: "no-repeat",
            padding: "100px 0px",
          }}
        >
          <Grid item md={6} sm={12} xs={12}>
            {/* <img src={Img} alt="" style={{zIndex:"-1"}}/> */}
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            sx={{ justifyContent: "center", alignItems: "center",textAlign:"center" }}
          >
            <Typography
              sx={{
                fontSize: "40px",
                color: "#282828",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Deal Of The Week
            </Typography>
            <Typography sx={{textAlign:"center"}}>

            <Box
              sx={{ width: "60px", height: "5px", backgroundColor: "red",marginLeft:"45%",marginTop:"20px" }}
            ></Box>
            </Typography>
              <Box sx={{marginTop:"50px"}}>

            <Box  
              sx={{
                backgroundColor: "white",
                padding: "10px 30px",
                borderRadius: "50%",
                width: "50px",
                height: "90px",
                display:"inline-block"
              }}
            >
              <Typography
                sx={{ fontSize: "36px", color: "red", textAlign: "center",fontWeight:"700" }}
              >
                2
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Day
              </Typography>
            </Box>
            <Box  
              sx={{
                backgroundColor: "white",
                padding: "10px 30px",
                borderRadius: "50%",
                width: "50px",
                height: "90px",
                display:"inline-block",
                marginLeft:"10px"

              }}
            >
              <Typography
                sx={{ fontSize: "36px", color: "red", textAlign: "center",fontWeight:"700" }}
              >
                23
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Hours
              </Typography>
            </Box>
            <Box  
              sx={{
                backgroundColor: "white",
                padding: "10px 30px",
                borderRadius: "50%",
                width: "50px",
                height: "90px",
                display:"inline-block",
                marginLeft:"10px"

              }}
            >
              <Typography
                sx={{ fontSize: "36px", color: "red", textAlign: "center",fontWeight:"700" }}
              >
                {m}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Mins
              </Typography>
            </Box>
            <Box  
              sx={{
                backgroundColor: "white",
                padding: "10px 30px",
                borderRadius: "50%",
                width: "50px",
                height: "90px",
                display:"inline-block",
                marginLeft:"10px"

              }}
            >
              <Typography
                sx={{ fontSize: "36px", color: "red", textAlign: "center",fontWeight:"700" }}
              >
                {s}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Sec
              </Typography>
            </Box>
            </Box>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default DealOfTheWeek;
