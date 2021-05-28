'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeesSchema extends Schema {
  up () {
    this.create('employees', (table) => {
      table.increments()
      table.string('first_name',20).notNullable()
      table.string('last_name',20).notNullable()
      table.string('email',254)
      table.string('password',20).notNullable()
      table.date('birth_date',8).notNullable()
      table.string('phone1',11).notNullable()
      table.string('phone2',11)
      table.string('sector',10).notNullable()
      table.float('salary',[7,2]).notNullable()
      table.string('street',45).notNullable()
      table.string('number',5).notNullable()
      table.string('distric',20).notNullable()
      table.string('complement',20)
      table.string('city',45).notNullable()
      table.boolean('status').defaultTo(true)
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('employees')
  }
}

module.exports = EmployeesSchema
