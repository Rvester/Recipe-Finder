import React, { useState, useEffect, useContext } from "react";
import { fetchRandomRecipe } from "../api/recipeAPI";
import { GlobalContext } from "../context/GlobalState";
import { Card, CardContent, CardMedia, Typography, Button, Box, Container } from "@mui/material";
import DOMPurify from "dompurify";

const RandomRecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    fetchRandomRecipe()
      .then((data) => setRecipe(data))
      .catch((err) => setError(err.message));
  }, []);

  const isFavorite = recipe && state.favorites.some((fav) => fav.id === recipe.id);

  const handleAddToFavorites = () => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: recipe });
  };

  const handleRemoveFromFavorites = () => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: recipe.id });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="sm">
      <Card>
        <CardMedia
          component="img"
          alt={recipe.title}
          height="300"
          image={recipe.image}
          title={recipe.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {recipe.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="div"
            align="center"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(recipe.instructions),
            }}
          />
          <Typography variant="subtitle1" component="h3" align="center">
            Nutritional Information
          </Typography>
          {recipe.nutrition && recipe.nutrition.nutrients ? (
            <ul>
              {recipe.nutrition.nutrients.map((nutrient) => (
                <li key={nutrient.name}>
                  {nutrient.name}: {nutrient.amount} {nutrient.unit}
                </li>
              ))}
            </ul>
          ) : (
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              align="center"
            >
              Nutritional information is not available.
            </Typography>
          )}
          <Box mt={2} display="flex" justifyContent="center">
            {isFavorite ? (
              <Button variant="contained" color="secondary" onClick={handleRemoveFromFavorites}>
                Remove from Favorites
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={handleAddToFavorites}>
                Add to Favorites
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RandomRecipePage;
