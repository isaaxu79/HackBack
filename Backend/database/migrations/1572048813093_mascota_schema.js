'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MascotaSchema extends Schema {
  up () {
    this.create('mascotas', (table) => {
      table.increments()
      table.string('nombre').notNullable()
      table.integer('id_usuario').references('id').inTable('users').onDelete('cascade')
      table.string('imgPerfil')
      table.string('especie').notNullable()
      table.string('raza')
      table.string('edad').notNullable()
      table.string('descripcion')
      table.string('sexo').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('mascotas')
  }
}

module.exports = MascotaSchema
