import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";
import { GlobalProvider } from "../context/GlobalState";

test("renders SearchBar component and updates search query", () => {
  const { getByPlaceholderText } = render(
    <GlobalProvider>
      <SearchBar />
    </GlobalProvider>
  );
  const input = getByPlaceholderText(/Search for recipes.../i);
  fireEvent.change(input, { target: { value: "test" } });
  expect(input.value).toBe("test");
});
