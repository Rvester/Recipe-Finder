export const fetchRecipes = async () => {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/random?number=100&includeNutrition=true&apiKey=27e27b14f252496d8355a31fa11e64b0"
  );
  const data = await response.json();
  return data.recipes;
};

export const fetchRecipeById = async (id) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=27e27b14f252496d8355a31fa11e64b0`
  );
  const data = await response.json();
  return data;
};

export const fetchRandomRecipe = async () => {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/random?number=1&includeNutrition=true&apiKey=27e27b14f252496d8355a31fa11e64b0"
  );
  const data = await response.json();
  return data.recipes[0];
};
