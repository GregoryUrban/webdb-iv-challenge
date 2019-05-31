const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);
const testHelpers = () => console.log(getDishes())



module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
//   update,
//   remove,
};

// `getDishes()`: should return a list of all dishes in the database.
function getDishes() {
  return db('dish');
}

// `addDish(dish)`: should add the **dish** to the database and return the `id` of the new **dish**.
function addDish(dish) {
  return db('dish')
    .insert(dish)
    .then(ids => ({ id: ids[0] }));
}

// `getDish(id)`: should return the **dish** with the provided `id` and include a list of the related recipes.
function getDish(id) {
  return db('dish').where({ id: Number(id) });
}

// `getRecipes()`: should return a list of all recipes in the database including the **dish** they belong to.
function getRecipes() {
    return db('recipe');
    // .where({ id: Number(id) });
  }

//  `addRecipe(recipe)`: should add a **recipe** to the database and return the `id` of the new **recipe**.
function addRecipe(recipe) {
return db('recipe')
    .insert(recipe)
    .then(ids => ({ id: ids[0] }));
}

// function update(id, post) {
//   return db('dish')
//     .where('id', Number(id))
//     .update(post);
// }

// function remove(id) {
//   return db('dish')
//     .where('id', Number(id))
//     .del();
// }
