import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "../api/recipeAPI";

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipeById(id).then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipePage;
