'use strict'
const Comun = use('App/Models/Comun')
const Database = use('Database')

class ComunController {
    async index ({ request, response, view }) {
        
        let comuns = await Database.table('comuns')
        return response.status(201).json(comuns)
      }
    
      async getByUser({ params, request, response, view }){
        let { id } = params
        let comun = await Database.table('comuns').select('*').where('usuario_id',id).innerJoin('users','users.id','comuns.usuario_id')

        return response.status(201).json(comun)
    }
    
      /**
       * Create/save a new class.
       * POST empresas
       */
      async store ({ request, response }) {
        let comun_data = request.all()
    
        let comun = await Comun.create(comun_data)
    
        return response.status(201).json(comun)
    
      }
    
      /**
       * Display a single class.
       * GET empresas/:id
       */
      async show ({ params, request, response, view }) {
        let { id } = params
        let comun = await Comun.find(id)
    
        return response.status(201).json(comun)
      }
    
    
      /**
       * Update class details.
       * PUT or PATCH empresas/:id
       *
       * @param {object} ctx
       * @param {Request} ctx.request
       * @param {Response} ctx.response
       */
      async update ({ params, request, response }) {
        let { id } = params
        let comun_data = request.all()
    
        let comun = await Comun.findOrFail(id)
    
        comun.merge(comun_data)
    
        await comun.save()
    
        return response.status(201).json(comun)
      }
    
      /**
       * Delete a class with id.
       * DELETE empresas/:id
       *
       * @param {object} ctx
       * @param {Request} ctx.request
       * @param {Response} ctx.response
       */
      async destroy ({ params, request, response }) {
        let { id } = params
        let comun = await Comun.findOrFail(id)
    
        await comun.delete()
    
        return response.status(200).json({
          msg: 'Eliminado'
        })
      }
}

module.exports = ComunController
