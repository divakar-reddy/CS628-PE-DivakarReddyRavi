import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRecipe } from "../api";

function AddRecipe() {
    const [recipe, setRecipe] = useState({ name: "", ingredients: "", instructions: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addRecipe({
            ...recipe,
            ingredients: recipe.ingredients.split(","),
        });
        navigate("/");
    };

    return (
        <div className="form-container">
            <h2>Add Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Recipe Name" value={recipe.name} onChange={handleChange} required />
                <textarea name="ingredients" placeholder="Ingredients (comma-separated)" value={recipe.ingredients} onChange={handleChange} required></textarea>
                <textarea name="instructions" placeholder="Instructions" value={recipe.instructions} onChange={handleChange} required></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddRecipe;
