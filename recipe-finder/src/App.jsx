import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/favorites" component={FavoritesPage} />
            <Route path="/recipe/:id" component={RecipePage} />
            <Route path="/random" component={RandomRecipePage} />
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
