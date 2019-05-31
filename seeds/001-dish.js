exports.seed = async function(knex) {
  await knex('dish').insert([
    { id: 1, name: 'Breakfast Sandwich' },
    { id: 2, name: 'Taco' },
    { id: 3, name: 'Steak' },
  ])
};
