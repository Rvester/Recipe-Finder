export const fetchRecipes = async () => {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/random?number=100&includeNutrition=true&apiKey=7eb116ea015040bca261ea5e4ddd7b9f"
  );
  const data = await response.json();
  return data.recipes;
};

export const fetchRecipeById = async (id) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=7eb116ea015040bca261ea5e4ddd7b9f`
  );
  const data = await response.json();
  return data;
};

export const fetchRandomRecipe = async () => {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/random?number=1&includeNutrition=true&apiKey=7eb116ea015040bca261ea5e4ddd7b9f"
  );
  const data = await response.json();
  return data.recipes[0];
};
