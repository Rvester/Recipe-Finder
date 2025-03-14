import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RecipeCard from "../components/RecipeCard";

const recipe = {
  id: 1,
  title: "Test Recipe",
  image: "test.jpg",
  instructions: "Test instructions",
  nutrition: {
    nutrients: [
      { name: "Calories", amount: 200, unit: "kcal" },
      { name: "Protein", amount: 10, unit: "g" },
    ],
  },
};

test("renders RecipeCard component", () => {
  const { getByText, getByAltText } = render(<RecipeCard recipe={recipe} />);
  expect(getByText(/Test Recipe/i)).toBeInTheDocument();
  expect(getByAltText(/Test Recipe/i)).toBeInTheDocument();
});

test("expands and collapses RecipeCard component", () => {
  const { getByText, queryByText } = render(<RecipeCard recipe={recipe} />);
  const button = getByText(/Show More/i);
  fireEvent.click(button);
  expect(getByText(/Test instructions/i)).toBeInTheDocument();
  expect(getByText(/Calories: 200 kcal/i)).toBeInTheDocument();
  expect(getByText(/Protein: 10 g/i)).toBeInTheDocument();
  fireEvent.click(button);
  expect(queryByText(/Test instructions/i)).not.toBeInTheDocument();
});
