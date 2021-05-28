'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SuppliersSchema extends Schema {
  up () {
    this.create('suppliers', (table) => {
      table.increments()
      table.string('name',80).notNullable()
      table.string('company_name',80).notNullable()
      table.string('email',254)
      table.string('phone1',11).notNullable()
      table.string('phone2',11)
      table.integer('id_categorie').unsigned().references('id').inTable('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('suppliers')
  }
}

module.exports = SuppliersSchema
