import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import RecipeCard from "../components/RecipeCard";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const FavoritesPage = () => {
  const { state } = useContext(GlobalContext);

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Favorites
      </Typography>
      {state.favorites.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          You have no favorite recipes yet.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {state.favorites.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default FavoritesPage;
