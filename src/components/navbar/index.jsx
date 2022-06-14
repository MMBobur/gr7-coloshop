// import React from 'react'

// function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import LockIcon from "@mui/icons-material/Lock";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import Grid from "@mui/material/Grid";
import { styled, alpha } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { fontWeight } from "@mui/system";
import { ButtonGroup } from "@mui/material";

const pages = ["Home", "Shop ", "Promotion ", "Pages ", "Blog ", "Contact"];

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 70,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <>
      <Grid
        sx={{
          display: { sm: "none", md: "flex", xs: "none" },
          height: "38px",
          backgroundColor: "#1E1E27",
        }}
      >
        <Container>
          <Grid
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid
              color="#888"
              sx={{ fontSize: "13px", display: "flex", alignItems: "center" }}
            >
              FREE SHIPPING ON ALL U.S ORDERS OVER $50
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid color="#888" mr="15px">
                <Typography>fashe@example.com</Typography>{" "}
              </Grid>

              <Grid>

                <Typography
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="button"
                  disableElevation
                  color="#888"
                  ml="2%"
                  onClick={handleClick}
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  USD <KeyboardArrowDownIcon />
                </Typography>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem sx={{ ":hover": { backgroundColor: "#E65540" } }}>
                    SAD
                  </MenuItem>
                  <MenuItem sx={{ ":hover": { backgroundColor: "#E65540" } }}>
                    AUD
                  </MenuItem>
                  <MenuItem sx={{ ":hover": { backgroundColor: "#E65540" } }}>
                    EUR
                  </MenuItem>
                  <MenuItem sx={{ ":hover": { backgroundColor: "#E65540" } }}>
                    BGP
                  </MenuItem>
                </StyledMenu>
              </Grid>
              <Grid>
                <Typography
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="button"
                  disableElevation
                  color="#888"
                  ml="10%"
                  onClick={handleClick}
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  English <KeyboardArrowDownIcon />
                </Typography>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem sx={{ ":hover": { backgroundColor: "#E65540" } }}>
                    SAD
                  </MenuItem>
                  <MenuItem sx={{ ":hover": { backgroundColor: "#E65540" } }}>
                    AUD
                  </MenuItem>
                  <MenuItem sx={{ ":hover": { backgroundColor: "#E65540" } }}>
                    EUR
                  </MenuItem>
                  <MenuItem sx={{ ":hover": { backgroundColor: "#E65540" } }}>
                    BGP
                  </MenuItem>
                </StyledMenu>
              </Grid>
              <Grid>
                <Typography
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="button"
                  disableElevation
                  color="#888"
                  ml="20%"
                  onClick={handleClick}
                  sx={{ display: "flex", }}
                >
                Acount <KeyboardArrowDownIcon />
                </Typography>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem sx={{ ":hover": { backgroundColor: "#E65540" } }}>
                    SAD
                  </MenuItem>
                  <MenuItem sx={{ ":hover": { backgroundColor: "#E65540" } }}>
                    AUD
                  </MenuItem>
                  <MenuItem sx={{ ":hover": { backgroundColor: "#E65540" } }}>
                    EUR
                  </MenuItem>
                  <MenuItem sx={{ ":hover": { backgroundColor: "#E65540" } }}>
                    BGP
                  </MenuItem>
                </StyledMenu>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              noWrap
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "black",
                fontSize: "24px",
                fontWeight: "700",
              }}
            >
              COLO<span style={{ color: "#FE4C50" }}>SHOP</span>
            </Typography>

            <Typography
              noWrap
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                color: "black",
                fontSize: "100%",
                fontWeight: "700",
              }}
            >
              COLO<span style={{ color: "#FE4C50" }}>SHOP</span>
            </Typography>
            <Box
              sx={{
                flexGrow: 19,
                alignItems: "center",
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    ":hover": { color: "red", bacgroundColor: "white" },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexGrow: 10,
                justifyContent: "flex-end",
                color: "text.secondary",
                "& svg": {
                  margin:0.5
                },
              }}
            >
              <span><SearchIcon/></span>
              <span><AccountCircleRoundedIcon/></span>
              <span><LocalGroceryStoreRoundedIcon/></span>
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
                alignItems: "stretch",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "black" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Grid
                  sx={{
                    display: { sm: "flex", md: "none", xs: "flex" },
                    height: "38px",
                    backgroundColor: "#F5F5F5",
                  }}
                >
                  <Container>
                    <Grid
                      sx={{
                        display: { md: "none", sm: "flex", xs: "flex" },
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        <Grid color="#888" mr="15px">
                          <Typography
                            id="demo-customized-button"
                            aria-controls={
                              open ? "demo-customized-menu" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            variant="button"
                            disableElevation
                            color="#888"
                            ml="2%"
                            onClick={handleClick}
                            sx={{ display: "flex", flexDirection: "row" }}
                          >
                            USD <KeyboardArrowDownIcon />
                          </Typography>
                          <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                              "aria-labelledby": "demo-customized-button",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                          >
                            <MenuItem
                              sx={{ ":hover": { backgroundColor: "#E65540" } }}
                            >
                              SAD
                            </MenuItem>
                            <MenuItem
                              sx={{ ":hover": { backgroundColor: "#E65540" } }}
                            >
                              AUD
                            </MenuItem>
                            <MenuItem
                              sx={{ ":hover": { backgroundColor: "#E65540" } }}
                            >
                              EUR
                            </MenuItem>
                            <MenuItem
                              sx={{ ":hover": { backgroundColor: "#E65540" } }}
                            >
                              BGP
                            </MenuItem>
                          </StyledMenu>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Container>
                </Grid>
                <Grid
                  sx={{
                    display: { sm: "flex", md: "none", xs: "flex" },
                    height: "38px",
                    backgroundColor: "#F5F5F5",
                  }}
                >
                  <Container>
                    <Grid
                      sx={{
                        display: { md: "none", sm: "flex", xs: "flex" },
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        <Grid color="#888" mr="15px">
                          <Typography
                            id="demo-customized-button"
                            aria-controls={
                              open ? "demo-customized-menu" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            variant="button"
                            disableElevation
                            color="#888"
                            ml="2%"
                            onClick={handleClick}
                            sx={{ display: "flex", flexDirection: "row" }}
                          >
                            English <KeyboardArrowDownIcon />
                          </Typography>
                          <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                              "aria-labelledby": "demo-customized-button",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                          >
                            <MenuItem
                              sx={{ ":hover": { backgroundColor: "#E65540" } }}
                            >
                              SAD
                            </MenuItem>
                            <MenuItem
                              sx={{ ":hover": { backgroundColor: "#E65540" } }}
                            >
                              AUD
                            </MenuItem>
                            <MenuItem
                              sx={{ ":hover": { backgroundColor: "#E65540" } }}
                            >
                              EUR
                            </MenuItem>
                            <MenuItem
                              sx={{ ":hover": { backgroundColor: "#E65540" } }}
                            >
                              BGP
                            </MenuItem>
                          </StyledMenu>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Container>
                </Grid>
                <Grid
                  sx={{
                    display: { sm: "flex", md: "none", xs: "flex" },
                    height: "38px",
                    backgroundColor: "#F5F5F5",
                  }}
                >
                  <Container>
                    <Grid
                      sx={{
                        display: { md: "none", sm: "flex", xs: "flex" },
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        <Grid color="#888" mr="15px">
                          <Typography
                            id="demo-customized-button"
                            aria-controls={
                              open ? "demo-customized-menu" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            variant="button"
                            disableElevation
                            color="#888"
                            ml="2%"
                            onClick={handleClick}
                            sx={{ display: "flex", flexDirection: "row" }}
                          >
                            Acount <KeyboardArrowDownIcon />
                          </Typography>
                          <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                              "aria-labelledby": "demo-customized-button",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                          >
                            <MenuItem
                              sx={{ ":hover": { backgroundColor: "#E65540" } }}
                            >
                              SAD
                            </MenuItem>
                            <MenuItem
                              sx={{ ":hover": { backgroundColor: "#E65540" } }}
                            >
                              AUD
                            </MenuItem>
                            <MenuItem
                              sx={{ ":hover": { backgroundColor: "#E65540" } }}
                            >
                              EUR
                            </MenuItem>
                            <MenuItem
                              sx={{ ":hover": { backgroundColor: "#E65540" } }}
                            >
                              BGP
                            </MenuItem>
                          </StyledMenu>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Container>
                </Grid>
                {pages.map((page) => (
                  <>
                    <Grid sx={{ color: "black" }}>
                      <MenuItem
                        color="black"
                        key={page}
                        onClick={handleCloseNavMenu}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </Grid>
                  </>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" } }} />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
