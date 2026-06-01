import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import RecipeDetails from "./components/RecipeDetails";
import "./styles.css";

function App() {
    return (
        <Router>
            <div className="fluid-container">
            <h1>Recipe Finder</h1>
                <nav>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="/add" activeClassName="active">Add Recipe</NavLink>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddRecipe />} />
                    <Route path="/edit/:id" element={<EditRecipe />} />
                    <Route path="/recipe/:id" element={<RecipeDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
