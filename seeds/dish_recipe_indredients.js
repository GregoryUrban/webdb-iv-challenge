exports.seed = async function(knex) {
  await knex('dish_recipe_ingredients').insert([
    {dish_id: 1, recipe_id: 1, ingredients_id: 1, quantity: 2},
  ])
};
