'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServicioSchema extends Schema {
  up () {
    this.create('servicios', (table) => {
      table.increments()
      table.string('titulo').notNullable()            
      table.string('descripcion').notNullable()               
      table.string('telefono').notNullable()   
      table.string('ubicacion').notNullable()         
      table.integer('id_usuario').references('id').inTable('users').onDelete('cascade')
      table.integer('calificacion')
      table.timestamps()
    })
  }

  down () {
    this.drop('servicios')
  }
}

module.exports = ServicioSchema
