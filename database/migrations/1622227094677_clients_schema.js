'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.string('first_name',20).notNullable()
      table.string('last_name',20)
      table.string('phone1',11)
      table.string('phone2',11)
      table.string('street',45)
      table.string('number',5)
      table.string('distric',20)
      table.string('complement',20)
      table.string('city',45)
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientsSchema
