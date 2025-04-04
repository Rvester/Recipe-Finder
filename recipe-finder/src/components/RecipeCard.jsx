import React, { useContext } from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { GlobalContext } from "../context/GlobalState";

const RecipeCard = ({ recipe, onClick }) => {
  const { state, dispatch } = useContext(GlobalContext);

  const isFavorite = state.favorites.some((fav) => fav.id === recipe.id);

  const handleAddToFavorites = (event) => {
    event.stopPropagation(); // Prevent the card's onClick from being triggered
    dispatch({ type: "ADD_TO_FAVORITES", payload: recipe });
  };

  const handleRemoveFromFavorites = (event) => {
    event.stopPropagation(); // Prevent the card's onClick from being triggered
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: recipe.id });
  };

  return (
    <Card
      sx={{ borderRadius: 2, boxShadow: 3, height: "100%", display: "flex", flexDirection: "column", cursor: "pointer" }}
      onClick={onClick} // This will open the modal or detailed view
    >
      <CardMedia
        component="img"
        alt={recipe.title}
        height="200"
        image={recipe.image}
        title={recipe.title}
        sx={{ borderRadius: 2 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
          {recipe.title}
        </Typography>
        <Box mt={2}>
          {isFavorite ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleRemoveFromFavorites} // Handle removing from favorites
            >
              Remove from Favorites
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToFavorites} // Handle adding to favorites
            >
              Add to Favorites
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
