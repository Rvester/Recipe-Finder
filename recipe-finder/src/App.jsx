import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import RecipePage from "./pages/RecipePage";
import RandomRecipePage from "./pages/RandomRecipePage";
import Navbar from "./components/Navbar";
import { GlobalProvider } from "./context/GlobalState";
import "./styles/index.css";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
            <Route path="/random" element={<RandomRecipePage />} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
