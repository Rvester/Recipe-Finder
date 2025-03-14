export const fetchRecipes = async () => {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/random?number=500&apiKey=ad173b551e5541eea830fd81b1c46001"
  );
  const data = await response.json();
  return data.recipes;
};

export const fetchRecipeById = async (id) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=ad173b551e5541eea830fd81b1c46001`
  );
  const data = await response.json();
  return data;
};

export const fetchRandomRecipe = async () => {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/random?number=1&includeNutrition=true&apiKey=ad173b551e5541eea830fd81b1c46001"
  );
  const data = await response.json();
  return data.recipes[0];
};
