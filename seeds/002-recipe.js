
exports.seed = async function(knex) {
  await knex('recipe').insert([
    { id: 1, name: 'Spicy Tacitos', dish_id: 2 },
  ])
};