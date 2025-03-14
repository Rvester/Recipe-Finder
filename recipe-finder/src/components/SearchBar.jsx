import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import { GlobalContext } from "../context/GlobalState";

const SearchBar = () => {
  const { dispatch } = useContext(GlobalContext);

  const handleChange = (e) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
  };

  return (
    <TextField
      label="Search for recipes..."
      variant="outlined"
      fullWidth
      margin="normal"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
