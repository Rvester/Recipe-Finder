export const fetchRecipes = async () => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=100&includeNutrition=true&apiKey=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();
    console.log('API response:', data);
    if (data && Array.isArray(data.recipes)) {
      return data.recipes;
    } else {
      throw new Error("API rate limited");
    }
  } catch (error) {
    console.error('Error fetching recipes: ', error);
    throw error;
  }
};

export const fetchRecipeById = async (id) => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipe by ID: ', error);
    throw error;
  }
};

export const fetchRandomRecipe = async () => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=1&includeNutrition=true&apiKey=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();
    if (data && Array.isArray(data.recipes)) {
      return data.recipes[0];
    } else {
      throw new Error("API rate limited");
    }
  } catch (error) {
    console.error('Error fetching random recipe: ', error);
    throw error;
  }
};
