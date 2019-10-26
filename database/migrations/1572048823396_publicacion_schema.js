'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PublicacionSchema extends Schema {
  up () {
    this.create('publicacions', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('publicacions')
  }
}

module.exports = PublicacionSchema
