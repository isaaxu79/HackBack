'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServicioSchema extends Schema {
  up () {
    this.create('servicios', (table) => {
      table.increments()
      table.string('titulo').notNullable()            
      table.string('descripcion').notNullable()                                
      table.string('imagen').notNullable()  
      table.string('telefono')
      table.integer('id_usuario').references('id').inTable('users').onDelete('cascade')      
      table.timestamps()
    })
  }

  down () {
    this.drop('servicios')
  }
}

module.exports = ServicioSchema
