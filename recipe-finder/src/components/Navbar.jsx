import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSurpriseMe = () => {
    navigate("/random", { replace: true });
    window.location.reload();
  };
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
          <Button color="inherit" onClick={handleSurpriseMe}>
            Surprise Me
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
