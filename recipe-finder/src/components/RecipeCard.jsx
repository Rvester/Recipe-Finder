import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import DOMPurify from "dompurify";

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={onClick}
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
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          sx={{ fontWeight: "bold" }}
        >
          {recipe.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(recipe.description),
          }}
        ></Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
