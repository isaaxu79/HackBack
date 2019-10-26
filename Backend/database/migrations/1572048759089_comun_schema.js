'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComunSchema extends Schema {
  up () {
    this.create('comuns', (table) => {
      table.increments()
      table.string('apellido').notNullable()
      table.date('fechaNacimiento').notNullable()
      table.integer('usuario_id').references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('comuns')
  }
}

module.exports = ComunSchema
