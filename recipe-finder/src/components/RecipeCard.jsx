import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Collapse,
  Button,
} from "@mui/material";

const RecipeCard = ({ recipe }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        alt={recipe.title}
        height="140"
        image={recipe.image}
        title={recipe.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {recipe.title}
        </Typography>
        <Button onClick={handleExpandClick}>
          {expanded ? "Show Less" : "Show More"}
        </Button>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant="body2" color="textSecondary">
            {recipe.instructions}
          </Typography>
          <Typography variant="h6">Nutritional Information</Typography>
          {recipe.nutrition && recipe.nutrition.nutrients ? (
            <ul>
              {recipe.nutrition.nutrients.map((nutrient) => (
                <li key={nutrient.name}>
                  {nutrient.name}: {nutrient.amount} {nutrient.unit}
                </li>
              ))}
            </ul>
          ) : (
            <Typography variant="body2" color="textSecondary">
              Nutritional information is not available.
            </Typography>
          )}
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
