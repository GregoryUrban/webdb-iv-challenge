
exports.seed = async function(knex) {
  await knex('ingredients').insert([
    { id: 1, name: 'Ground Beef', unit: 'Pound'},
  ])
};
