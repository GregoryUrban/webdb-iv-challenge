exports.seed = async function(knex) {
  await knex('recipe_ingredients').insert([
    { id: 1, recipe_id: 1, ingredients_id: 1, quantity: 2},
  ])
};
