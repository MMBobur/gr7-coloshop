import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AppleIcon from "@mui/icons-material/Apple";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow:"none"
}));

function Footer() {
  return (
    <Box sx={{ flexGrow: 1, width: "81%", marginLeft: "9%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Item>
            <Grid container>
              <Grid xs={12} sm={12} md={6}>
                <Item sx={{ textAlign: "left" }}>
                  <div style={{ display: "inline-block", marginRight: "10%" }}>
                    Blog
                  </div>
                  <div style={{ display: "inline-block", marginRight: "10%" }}>
                    FAQs
                  </div>
                  <div style={{ display: "inline-block" }}>Contact Us</div>
                </Item>
              </Grid>
              <Grid xs={12} md={6}>
                <Item sx={{ textAlign: { md: "right", xs: "left" } }}>
                  <div style={{ display: "inline-block", marginRight: "4%" }}>
                    <FacebookOutlinedIcon />
                  </div>
                  <div style={{ display: "inline-block", marginRight: "4%" }}>
                    <TwitterIcon />
                  </div>
                  <div style={{ display: "inline-block", marginRight: "4%" }}>
                    <InstagramIcon />
                  </div>
                  <div style={{ display: "inline-block", marginRight: "4%" }}>
                    <AdminPanelSettingsIcon />
                  </div>
                  <div style={{ display: "inline-block" }}>
                    <AppleIcon />
                  </div>
                </Item>
              </Grid>
              <Grid xs={12}>
                <Item
                  sx={{
                    textAlign: "left",
                    fontSize: "120%",
                  }}
                >
                  {" "}
                  ©2018 All Rights Reserverd. This template is madithe width{" "}
                  <FavoriteBorderIcon
                    sx={{ fontSize: "16px", color: "red" }}
                  />{" "}
                  by <span style={{color:"red"}}>Colorlib</span>
                </Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
