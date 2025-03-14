import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const RecipeCard = ({ recipe }) => {
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
        <Typography gutterBottom variant="h5" component="h2">
          {recipe.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
