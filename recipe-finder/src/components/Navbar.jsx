import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: "bold" }}>
            Recipe Finder
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/favorites">
            Favorites
          </Button>
          <Button color="inherit" component={Link} to="/random">
            Surprise Me
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
