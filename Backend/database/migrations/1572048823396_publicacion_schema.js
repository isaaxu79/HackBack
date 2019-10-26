'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PublicacionSchema extends Schema {
  up () {
    this.create('publicacions', (table) => {
      table.increments()
      table.string('titulo').notNullable()
      table.string('tipo').notNullable()
      table.integer('mascota_id').references('id').inTable('mascotas').onDelete('cascade')
      table.integer('id_usuario').references('id').inTable('users').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('publicacions')
  }
}

module.exports = PublicacionSchema
