import React from "react";
import { render, waitFor } from "@testing-library/react";
import RandomRecipePage from "../pages/RandomRecipePage";
import { fetchRandomRecipe } from "../api/recipeAPI";

jest.mock("../api/recipeAPI");

const recipe = {
  id: 1,
  title: "Random Recipe",
  image: "random.jpg",
  instructions: "Random instructions",
  nutrition: {
    nutrients: [
      { name: "Calories", amount: 200, unit: "kcal" },
      { name: "Protein", amount: 10, unit: "g" },
    ],
  },
};

test("renders RandomRecipePage component and fetches random recipe", async () => {
  fetchRandomRecipe.mockResolvedValue(recipe);
  const { getByText, getByAltText } = render(<RandomRecipePage />);
  await waitFor(() => {
    expect(getByText(/Random Recipe/i)).toBeInTheDocument();
    expect(getByAltText(/Random Recipe/i)).toBeInTheDocument();
    expect(getByText(/Random instructions/i)).toBeInTheDocument();
    expect(getByText(/Calories: 200 kcal/i)).toBeInTheDocument();
    expect(getByText(/Protein: 10 g/i)).toBeInTheDocument();
  });
});
