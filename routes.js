const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();


const API_KEY = "1967ae41eb97462cae857470e8daba65";

router.get('/recipes', async (req, res) => {
    const { ingredients, diet } = req.query;

    try {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${ingredients}&diet=${diet}&number=5&apiKey=${API_KEY}`
        );

        const data = await response.json();

        if (!data.results) {
            return res.status(404).json({ error: "No recipes found" });
        }

        res.json(data.results);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;