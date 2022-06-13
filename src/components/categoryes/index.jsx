import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

import Button from "@mui/material/Button";

import rasm1 from "./../../assets/photo1.jpg";
import rasm2 from "./../../assets/photo2.jpg";
import rasm3 from "./../../assets/photo3.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginTop: "20px",
  marginBottom: "20px",
  borderRadius: "0px",
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={4} sm={4} xs={12}>
            <Item
              sx={{
                backgroundImage: `url(${rasm1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "290px",
                // margin: "20px 30px 5px 0px",
              }}
            >
              <Button
                sx={{
                  marginTop: "30%",
                  borderRadius: "0px",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "600",
                  ":hover": { opacity: "0.7", background: "white" },
                  transition: "0.6s ease",
                  width: "200px",
                }}
                variant="contained"
                disableElevation
              >
                WOMEN'S
              </Button>
            </Item>
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <Item
              sx={{
                backgroundImage: `url(${rasm2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "290px",
                // margin: "20px 0px 5px 15px",
              }}
            >
              <Button
                sx={{
                  marginTop: "30%",
                  borderRadius: "0px",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "600",
                  ":hover": { opacity: "0.7", background: "white" },
                  transition: "0.6s ease",
                  width: "200px",
                }}
                variant="contained"
                disableElevation
              >
                ACCESSORIES'S
              </Button>
            </Item>
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <Item
              sx={{
                backgroundImage: `url(${rasm3})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "290px",
                // margin: "20px 0px 5px 30px",
              }}
            >
              <Button
                sx={{
                  marginTop: "30%",
                  borderRadius: "0px",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "600",
                  ":hover": { opacity: "0.7", background: "white" },
                  transition: "0.6s ease",
                  width: "200px",
                }}
                variant="contained"
                disableElevation
              >
                MEN'S
              </Button>
              v
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
