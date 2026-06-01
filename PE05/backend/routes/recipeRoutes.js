const express = require('express');
const Recipe = require('../models/Recipe');
const router = express.Router();

// GET all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// GET a single recipe by ID
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: "Recipe not found" });
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// POST a new recipe
router.post('/', async (req, res) => {
    try {
        const { name, ingredients, instructions } = req.body;
        const newRecipe = new Recipe({ name, ingredients, instructions });
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({ error: "Invalid input" });
    }
});

// PUT (Update) a recipe by ID
router.put('/:id', async (req, res) => {
    try {
        const { name, ingredients, instructions } = req.body;
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            { name, ingredients, instructions },
            { new: true }
        );
        if (!updatedRecipe) return res.status(404).json({ message: "Recipe not found" });
        res.json(updatedRecipe);
    } catch (error) {
        res.status(400).json({ error: "Invalid update request" });
    }
});

// DELETE a recipe by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) return res.status(404).json({ message: "Recipe not found" });
        res.json({ message: "Recipe deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
