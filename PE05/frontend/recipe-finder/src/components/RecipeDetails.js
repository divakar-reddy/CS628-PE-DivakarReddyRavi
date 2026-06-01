import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../api";

function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        getRecipeById(id).then(response => setRecipe(response.data));
    }, [id]);

    if (!recipe) return <p>Loading...</p>;

    return (
        <div>
            <h2>{recipe.name}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
        </div>
    );
}

export default RecipeDetails;
