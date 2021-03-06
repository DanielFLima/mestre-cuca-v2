'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PasswordResetsSchema extends Schema {
  up () {
    this.create('password_resets', (table) => {
      table.increments()
      table.string('email',255).notNullable()
      table.string('token',255).notNullable().unique()

      table.string('email_fk',255).references('email').inTable('users').onDelete('cascade')
      table.dateTime('expire_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('password_resets')
  }
}

module.exports = PasswordResetsSchema
