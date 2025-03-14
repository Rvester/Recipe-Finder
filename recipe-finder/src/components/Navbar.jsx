import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
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
    </AppBar>
  );
};

export default Navbar;
