const router = require('express').Router();

const recipesController = require('../controllers/recipesController');

router.get('/last-arrivals', recipesController.getLastArrivals);
router.post('/add-recipe', recipesController.addRecipe);
router.get('/my-recipes', recipesController.getMyRecipes);
router.get('/:collectionName', recipesController.getAllRecipesForCollection);
router.get('/:collectionName/:recipeId', recipesController.getRecipeById);

module.exports = router;