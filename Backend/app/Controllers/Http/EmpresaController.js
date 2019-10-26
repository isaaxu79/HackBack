'use strict'
const Empresa = use('App/Models/Empresa')
const Database = use('Database')

class EmpresaController {

    async index ({ request, response, view }) {
        
        let empresas = await Database.table('empresas')
        return response.status(201).json(empresas)
      }
    
    
      /**
       * Create/save a new class.
       * POST empresas
       */
      async store ({ request, response }) {
        let empresa_data = request.all()
    
        let empresa = await Empresa.create(empresa_data)
    
        return response.status(201).json(empresa)
    
      }
    
      /**
       * Display a single class.
       * GET empresas/:id
       */
      async show ({ params, request, response, view }) {
        let { id } = params
        let empresa = await Empresa.find(id)
    
        return response.status(201).json(empresa)
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
        let empresa_data = request.all()
    
        let empresa = await Empresa.findOrFail(id)
    
        empresa.merge(empresa_data)
    
        await empresa.save()
    
        return response.status(201).json(empresa)
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
        let empresa = await Empresa.findOrFail(id)
    
        await empresa.delete()
    
        return response.status(200).json({
          msg: 'Eliminado'
        })
      }
}

module.exports = EmpresaController
