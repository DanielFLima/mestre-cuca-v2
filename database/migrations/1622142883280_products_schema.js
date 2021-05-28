'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name',80).notNullable()
      table.integer('id_categorie').unsigned().references('id').inTable('categories')
      table.integer('id_supplier').unsigned().references('id').inTable('suppliers')
      table.integer('qtd').notNullable().unsigned()
      table.float('price',[7,2]).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
