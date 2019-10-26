'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FotoEmpresaSchema extends Schema {
  up () {
    this.create('foto_empresas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('foto_empresas')
  }
}

module.exports = FotoEmpresaSchema
