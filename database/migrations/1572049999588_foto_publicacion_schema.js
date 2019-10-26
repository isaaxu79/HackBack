'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FotoPublicacionSchema extends Schema {
  up () {
    this.create('foto_publicacions', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('foto_publicacions')
  }
}

module.exports = FotoPublicacionSchema
