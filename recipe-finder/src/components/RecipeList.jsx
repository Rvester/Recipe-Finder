import React from 'react';
import RecipeCard from './RecipeCard';
import Grid from '@mui/material/Grid2';

const RecipeList = ({ recipes, onCardClick }) => {
  return (
    <Grid container spacing={3}>
      {recipes.map(recipe => (
        <Grid item xs={12} sm={6} md={4} lg={2.4} key={recipe.id}>
          <RecipeCard recipe={recipe} onClick={() => onCardClick(recipe)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;
