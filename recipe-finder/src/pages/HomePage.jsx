import React, { useState, useEffect, useContext } from "react";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";
import { fetchRecipes } from "../api/recipeAPI";
import { GlobalContext } from "../context/GlobalState";
import { Container, Typography, Box, Modal, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const { state } = useContext(GlobalContext);

  useEffect(() => {
    fetchRecipes().then((data) => setRecipes(data));
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(state.searchQuery.toLowerCase())
  );

  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleClose = () => {
    setSelectedRecipe(null);
  };

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
        <RecipeList recipes={filteredRecipes} onCardClick={handleCardClick} />
      </Box>
      <Modal open={!!selectedRecipe} onClose={handleClose}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          {selectedRecipe && (
            <Card sx={{ maxWidth: 600, position: 'relative' }}>
              <IconButton
                sx={{ position: 'absolute', top: 8, right: 8 }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
              <CardMedia
                component="img"
                alt={selectedRecipe.title}
                height="300"
                image={selectedRecipe.image}
                title={selectedRecipe.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align="center">
                  {selectedRecipe.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                  align="center"
                  dangerouslySetInnerHTML={{ __html: selectedRecipe.instructions }}
                />
              </CardContent>
            </Card>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default HomePage;
