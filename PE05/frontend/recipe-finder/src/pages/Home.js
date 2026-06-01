import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecipes, deleteRecipe } from "../api";
import "./Home.css"; // Import CSS for custom styling

function Home() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes().then(response => setRecipes(response.data));
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            await deleteRecipe(id);
            setRecipes(recipes.filter(recipe => recipe._id !== id));
        }
    };

    return (
        <div className="home-container mt-4">
            <h2 className="text-center">Recipe List</h2>
            <table className="table table-striped table-bordered mt-3">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Ingredients</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.length > 0 ? (
                        recipes.map(recipe => (
                            <tr key={recipe._id}>
                                <td>
                                    <Link to={`/recipe/${recipe._id}`} className="recipe-link">
                                        {recipe.name}
                                    </Link>
                                </td>
                                <td>{recipe.ingredients.join(", ")}</td>
                                <td>
                                    <Link to={`/edit/${recipe._id}`} className="btn btn-primary btn-sm mx-1">Edit</Link>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(recipe._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="text-center">No recipes found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Link to="/add" className="btn btn-success">Add New Recipe</Link>
        </div>
    );
}

export default Home;
