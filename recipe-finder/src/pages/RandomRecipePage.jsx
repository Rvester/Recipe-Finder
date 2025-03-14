import React, { useState, useEffect } from "react";
import { fetchRandomRecipe } from "../api/recipeAPI";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const RandomRecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRandomRecipe()
      .then((data) => setRecipe(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="xs" sx={{ marginTop: "20px", width: "70%" }}>
      <Card>
        <CardMedia
          component="img"
          alt={recipe.title}
          height="300"
          image={recipe.image}
          title={recipe.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" align="center">
            {recipe.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="center"
          >
            {recipe.instructions}
          </Typography>
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
        </CardContent>
      </Card>
    </Container>
  );
};

export default RandomRecipePage;
