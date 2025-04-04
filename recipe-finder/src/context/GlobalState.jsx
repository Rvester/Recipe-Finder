import React, { createContext, useReducer } from "react";

const initialState = {
  favorites: [], // Add favorites to the global state
  searchQuery: "",
};

const GlobalContext = createContext(initialState);

const globalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      // Avoid duplicates in the favorites list
      if (state.favorites.find((recipe) => recipe.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((recipe) => recipe.id !== action.payload),
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
