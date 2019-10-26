'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MascotaSchema extends Schema {
  up () {
    this.create('mascotas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('mascotas')
  }
}

module.exports = MascotaSchema
