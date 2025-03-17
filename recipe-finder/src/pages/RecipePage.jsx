import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "../api/recipeAPI";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Box,
} from "@mui/material";
import DOMPurify from "dompurify";

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipeById(id)
      .then((data) => setRecipe(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: "20px" }}>
      <Card>
        <CardMedia
          component="img"
          alt={recipe.title}
          height="300"
          image={recipe.image}
          title={recipe.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h1" align="center">
            {recipe.title}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="div"
            align="center"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(recipe.instructions),
            }}
          />
          <Typography
            variant="h5"
            component="h2"
            align="center"
            sx={{ marginTop: "20px" }}
          >
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

export default RecipePage;
