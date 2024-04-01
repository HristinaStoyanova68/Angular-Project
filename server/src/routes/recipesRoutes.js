const router = require('express').Router();

const recipesController = require('../controllers/recipesController');

router.get('/last-arrivals', recipesController.getLastArrivals);
router.get('/:collectionName', recipesController.getAllRecipesForCollection);
router.get('/:collectionName/:recipeId', recipesController.getRecipeById);
router.get('/my-recipes', recipesController.getMyRecipes);
router.post('/add-recipe', recipesController.addRecipe);

module.exports = router;