import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";

test("renders Navbar component", () => {
  const { getByText } = render(
    <Router>
      <Navbar />
    </Router>
  );
  expect(getByText(/Recipe Finder/i)).toBeInTheDocument();
  expect(getByText(/Home/i)).toBeInTheDocument();
  expect(getByText(/Favorites/i)).toBeInTheDocument();
  expect(getByText(/Surprise Me/i)).toBeInTheDocument();
});
