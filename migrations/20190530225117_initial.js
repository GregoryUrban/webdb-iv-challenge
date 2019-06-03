
exports.up = async function(knex) {
    await knex.schema.createTable('dish', (tbl) => {
      tbl.increments('id')
      tbl.string('name').unique().notNullable()
    })
  
    await knex.schema.createTable('recipe', (tbl) => {
      tbl.increments('id')
      tbl.string('name').unique().notNullable()
      tbl.integer('dish_id').references('id').inTable('dish').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
    })
  
    await knex.schema.createTable('ingredients', (tbl) => {
      tbl.increments('id')
      tbl.string('name').unique().notNullable()
      tbl.string('unit').notNullable()
    })
  
    await knex.schema.createTable('recipe_ingredients', (tbl) => {
      tbl.increments('id').unique()
      tbl.integer('recipe_id').references('id').inTable('recipe').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      tbl.integer('ingredients_id').references('id').inTable('ingredients').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      tbl.float('quantity').notNullable()
    //   tbl.string('ingredients_unit').references('unit').inTable('ingredients').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
    //   tbl.string('ingredients_unit').references('unit').inTable('ingredients').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
    //   tbl.integer('unit_amount').notNullable()
    })

    await knex.schema.createTable('dish_recipe_ingredients', (tbl) => {
      tbl.increments('id').unique()
      tbl.integer('dish_id').references('id').inTable('recipe').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      // tbl.string('dish_name').references('id').inTable('recipe').onDelete('CASCADE').onUpdate('CASCADE').notNullable()

      tbl.integer('recipe_id').references('id').inTable('recipe').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      tbl.integer('ingredients_id').references('id').inTable('ingredients').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      tbl.float('quantity').notNullable()
    //   tbl.string('ingredients_unit').references('unit').inTable('ingredients').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
    //   tbl.string('ingredients_unit').references('unit').inTable('ingredients').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
    //   tbl.integer('unit_amount').notNullable()
    })

  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipe_ingredients')
    await knex.schema.dropTableIfExists('ingredients')
    await knex.schema.dropTableIfExists('recipe')
    await knex.schema.dropTableIfExists('dish')
  };
  