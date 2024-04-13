const router = require('express').Router();

const recipesController = require('../controllers/recipesController');
const verifyJWT = require('../middlewares/verifyJWT');

router.get('/last-arrivals', recipesController.getLastArrivals);
router.post('/add-recipe', verifyJWT, recipesController.addRecipe);
router.get('/my-recipes', verifyJWT, recipesController.getMyRecipes);
router.get('/:collectionName', recipesController.getAllRecipesForCollection);
router.get('/:collectionName/:recipeId', recipesController.getRecipeById);
router.get('/:collectionName/:recipeId/is-owner', recipesController.checkIsOwner);
router.put('/:collectionName/:recipeId/edit',  verifyJWT,recipesController.editRecipe);
router.delete('/:collectionName/:recipeId/delete', verifyJWT, recipesController.deleteRecipe);
router.put('/:collectionName/:recipeId/like', verifyJWT, recipesController.likeRecipe);

module.exports = router;