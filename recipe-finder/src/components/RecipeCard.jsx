import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Collapse,
  Button,
  Box,
} from "@mui/material";

const RecipeCard = ({ recipe }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
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
        <Button
          onClick={handleExpandClick}
          sx={{ textTransform: "none", color: "primary.main" }}
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box mt={2}>
            <Typography variant="body2" color="textSecondary" component="p">
              {recipe.instructions}
            </Typography>
            <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
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
              <Typography variant="body2" color="textSecondary" component="p">
                Nutritional information is not available.
              </Typography>
            )}
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
