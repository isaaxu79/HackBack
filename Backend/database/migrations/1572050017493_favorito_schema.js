'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FavoritoSchema extends Schema {
  up () {
    this.create('favoritos', (table) => {
      table.increments()
      table.integer('usuario_id').references('id').inTable('empresas')      
      table.integer('publicacion_id').references('id').inTable('empresas')
      table.timestamps()
    })
  }

  down () {
    this.drop('favoritos')
  }
}

module.exports = FavoritoSchema
