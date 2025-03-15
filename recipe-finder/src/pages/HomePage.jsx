import React, { useState, useEffect, useContext } from "react";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";
import { fetchRecipes } from "../api/recipeAPI";
import { GlobalContext } from "../context/GlobalState";
import { Container, Typography, Box } from "@mui/material";

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
    <Container>
      <Box my={4}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Discover Delicious Recipes
        </Typography>
        <SearchBar />
        <RecipeList recipes={filteredRecipes} />
      </Box>
    </Container>
  );
};

export default HomePage;
