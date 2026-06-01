import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipeById, updateRecipe } from "../api";

function EditRecipe() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({ name: "", ingredients: "", instructions: "" });

    useEffect(() => {
        getRecipeById(id).then(response => setRecipe(response.data));
    }, [id]);

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateRecipe(id, { ...recipe, ingredients: recipe.ingredients.split(",") });
        navigate("/");
    };

    return (
        <div className="form-container">
            <h2>Edit Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={recipe.name} onChange={handleChange} required />
                <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} required></textarea>
                <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required></textarea>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditRecipe;
