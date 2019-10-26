'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FavoritoSchema extends Schema {
  up () {
    this.create('favoritos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('favoritos')
  }
}

module.exports = FavoritoSchema
