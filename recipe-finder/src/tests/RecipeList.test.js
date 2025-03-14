import React from "react";
import { render } from "@testing-library/react";
import RecipeList from "../components/RecipeList";

const recipes = [
  { id: 1, title: "Recipe 1", image: "image1.jpg" },
  { id: 2, title: "Recipe 2", image: "image2.jpg" },
];

test("renders RecipeList component", () => {
  const { getByText } = render(<RecipeList recipes={recipes} />);
  expect(getByText(/Recipe 1/i)).toBeInTheDocument();
  expect(getByText(/Recipe 2/i)).toBeInTheDocument();
});
