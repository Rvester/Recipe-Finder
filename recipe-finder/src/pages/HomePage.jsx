import React, { useState, useEffect, useContext } from "react";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";
import { fetchRecipes } from "../api/recipeAPI";
import { GlobalContext } from "../context/GlobalState";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const { state } = useContext(GlobalContext);

  useEffect(() => {
    fetchRecipes().then((data) => setRecipes(data));
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(state.searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default HomePage;
