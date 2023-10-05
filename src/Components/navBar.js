import { Button, AppBar, Box, Container } from "@mui/material";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const pages = ["HOME", "ABOUT US", "SERVICE", "CLIENTS"];

function ResponsiveAppBar(params) {
  const [idValue, setIdValue] = useState("HOME");
  const [NavLin, setnavLin] = useState();

  const handleOpenNavMenu = (event) => {
    setIdValue(event);
  };

  const imagescr = "https://www.imcapsule.com/Logo/logo.png";
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "black",
        borderBottom: null,
        height: "5rem",
        display: "flex",
        justifyContent: "center",
        transition: "all 500ms ease",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.01), 0px 1px 10px 0px rgba(0,0,0,0.01);",
      }}>
      <Container maxWidth="xl">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Box
            sx={
              {
                // display: { xs: "none", md: "flex" },
              }
            }>
            <picture>
              <img
                src={imagescr}
                width={110}
                height={"auto"}
                alt="Picture of the author"
              />
            </picture>
          </Box>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="default">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  // onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page} to="" style={{ textDecoration: "none" }}>
                <Box
                  // key={page}
                  onClick={() => {
                    handleOpenNavMenu(page);
                  }}
                  sx={{
                    hover: "pointer",
                    my: 2,
                    mx: 3,
                    // color: "gray",
                    display: "block",
                    fontSize: "15px",
                    fontWeight: "500",
                    fontStyle: "normal",
                    letterSpacing: "1px",
                    transition: " all .2s ease-in-out",
                    borderBottom: idValue == page ? "2.8px solid orange" : null,

                    color: idValue == page ? "orange" : "gray",
                    "&:hover": {
                      borderBottom: "2.8px solid orange",
                      cursor: "pointer",
                      color: "orange",
                    },
                  }}>
                  {page}
                </Box>
              </Link>
            ))}
          </Box>

          <Box>
            {/* <Link href="" style={{ textDecoration: "none" }}> */}
            <Button
              disableElevation={true}
              // color="warning"
              variant="contained"
              sx={{
                fontSize: ".7rem",
                letterSpacing: "1px",
                px: "12px",
                py: "3px",
                borderRadius: "5px",
                color: "black",
                backgroundColor: "#fff",

                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}>
              GET STARTED
            </Button>
            {/* </Link> */}
          </Box>
        </div>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
