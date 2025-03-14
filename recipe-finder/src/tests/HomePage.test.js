import React from "react";
import { render, waitFor } from "@testing-library/react";
import HomePage from "../pages/HomePage";
import { GlobalProvider } from "../context/GlobalState";
import { fetchRecipes } from "../api/recipeAPI";

jest.mock("../api/recipeAPI");

const recipes = [
  { id: 1, title: "Recipe 1", image: "image1.jpg" },
  { id: 2, title: "Recipe 2", image: "image2.jpg" },
];

test("renders HomePage component and fetches recipes", async () => {
  fetchRecipes.mockResolvedValue(recipes);
  const { getByText } = render(
    <GlobalProvider>
      <HomePage />
    </GlobalProvider>
  );
  await waitFor(() => {
    expect(getByText(/Recipe 1/i)).toBeInTheDocument();
    expect(getByText(/Recipe 2/i)).toBeInTheDocument();
  });
});
