export const fetchRecipes = async () => {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/random?number=10&apiKey=YOUR_API_KEY"
  );
  const data = await response.json();
  return data.recipes;
};

export const fetchRecipeById = async (id) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=YOUR_API_KEY`
  );
  const data = await response.json();
  return data;
};
