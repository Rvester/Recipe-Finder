import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import RecipeCard from "../components/RecipeCard";
import Grid from "@mui/material/Grid2";

const FavoritesPage = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div>
      <h1>Favorites Page</h1>
      <Grid container spacing={3}>
        {state.favorites.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FavoritesPage;
