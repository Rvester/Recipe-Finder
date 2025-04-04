# Recipe Finder

Recipe Finder is a React-based web application that allows users to explore, search, and save their favorite recipes. The app integrates with the Spoonacular API to fetch recipe data and provides an intuitive interface for users to interact with.

## Features

- **Search Recipes**: Use the search bar to filter recipes by keywords.
- **View Recipe Details**: Click on a recipe card to view detailed information, including ingredients, instructions, and nutritional facts.
- **Favorites Management**: Add recipes to your favorites list or remove them as needed.
- **Random Recipe**: Discover new recipes by navigating to the "Surprise Me" page, which fetches a random recipe.
- **Responsive Design**: The app is designed to work seamlessly on both desktop and mobile devices.

## Components

### Navbar

- Provides navigation links to the Home, Favorites, and Surprise Me pages.
- Includes a button to fetch a random recipe.

### RecipeCard

- Displays a single recipe with its image and title.
- Allows users to add or remove the recipe from their favorites.
- Clicking on the card opens a detailed view of the recipe.

### RecipeList

- Renders a grid of `RecipeCard` components.
- Dynamically updates based on the search query or favorites list.

### SearchBar

- Enables users to search for recipes by typing keywords.
- Updates the global state with the search query.

## Pages

### Home Page

- Displays a list of recipes fetched from the Spoonacular API.
- Filters recipes based on the search query.

### Favorites Page

- Shows all recipes that the user has added to their favorites.
- Allows users to manage their favorite recipes.

### Recipe Page

- Displays detailed information about a specific recipe, including its image, title, instructions, and nutritional data.

### Random Recipe Page

- Fetches and displays a random recipe from the Spoonacular API.
- Allows users to add or remove the recipe from their favorites.

## Global State Management

The app uses React Context and `useReducer` to manage global state, including:

- A list of favorite recipes.
- The current search query.

## API Integration

The app integrates with the Spoonacular API to fetch:

- A list of recipes.
- Detailed information about a specific recipe.
- A random recipe.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Material-UI**: Component library for styling and layout.
- **Spoonacular API**: Source of recipe data.
- **React Context**: For global state management.
