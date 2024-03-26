const router = require('express').Router();

const recipesController = require('../controllers/recipesController');

router.post('/add-recipe', recipesController.addRecipe);

module.exports = router;