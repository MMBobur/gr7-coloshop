import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "./style.css";
import data from "./data";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, pt: 4, pb: 8 }}>
      <Container>
        <Box>
          <Typography
            variant="h4"
            color="black"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            New Arrivals
          </Typography>
          <br />
          <Typography
            sx={{
              borderBottom: "5px solid red",
              width: "7%",
              alignSelf: "center",
              ml: "47%",
            }}
          ></Typography>
        </Box>{" "}
        <br />
        <br />
        <br />
        <Item
          sx={{
            wordSpacing: 15,
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {" "}
          <span
            style={{
              border: "1px solid red",
              backgroundColor: "red",
              padding: "1%",
              paddingLeft: "3%",
              paddingRight: "3%",
              borderRadius: "3px",
              color: "white",
            }}
          >
            all
          </span>
          <span
            style={{
              border: "1px solid grey",
              padding: "1%",
              paddingLeft: "2%",
              paddingRight: "2%",
              borderRadius: "3px",
              color: "black",
            }}
          >
            women's
          </span>
          <span
            style={{
              border: "1px solid grey",
              padding: "1%",
              paddingLeft: "2%",
              paddingRight: "2%",
              borderRadius: "3px",
              color: "black",
            }}
          >
            accessiories
          </span>
          <span
            style={{
              border: "1px solid grey",
              padding: "1%",
              paddingLeft: "2%",
              paddingRight: "2%",
              borderRadius: "3px",
              color: "black",
            }}
          >
            men's
          </span>
        </Item>{" "}
        <br />
        <br />
        <Grid container spacing={1} rowSpacing={5}>
          {data.map((menu, id) => (
            <Grid item xs={12} sm={3} md={2.4} lg={2.4} key={id}>
              <Item className="container">
                <Typography>
                  <Typography >
                    <img className="image" src={menu.img} alt={menu.desc} />
                  </Typography>
                  <Typography>{menu.title}</Typography>
                  <Typography color="red" sx={{ fontWeight: "bold" }}>
                    ${menu.price}.00
                  </Typography>
                <Typography
                  className="overlay"
                  sx={{
                    width: "95%",
                    padding: "2%",
                    bgcolor: "red",
                    color: "white",
                    borderRadius: "5px",
                    ml: '-2%',
                    textTransform: "uppercase",
                    fontSize: "small",
                  }}
                >
                  Add to cart
                </Typography>
                </Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
