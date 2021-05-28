'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RequestsSchema extends Schema {
  up () {
    this.create('requests', (table) => {
      table.increments()
      table.integer('id_client').unsigned().references('id').inTable('clients')
      table.integer('id_sale').unsigned().references('id').inTable('sales')
      table.integer('id_employee').unsigned().references('id').inTable('employees')
      table.timestamps()
    })
  }

  down () {
    this.drop('requests')
  }
}

module.exports = RequestsSchema
