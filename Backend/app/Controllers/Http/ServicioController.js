'use strict'
const Servicio = use('App/Models/Servicio')
const Database = use('Database')

class ServicioController {
    async index({ request, response, view }) {

        let servicios = await Database.table('servicios')
        return response.status(201).json(servicios)
    }
    

    /**
     * Create/save a new class.
     * POST empresas
     */
    async store({ request, response }) {
        let servicio_data = request.all()

        let servicio = await Servicio.create(servicio_data)

        return response.status(201).json(servicio)

    }

    /**
     * Display a single class.
     * GET empresas/:id
     */
    async show({ params, request, response, view }) {
        let { id } = params
        let servicio = await Servicio.find(id)

        return response.status(201).json(servicio)
    }


    /**
     * Update class details.
     * PUT or PATCH empresas/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        let { id } = params
        let servicio_data = request.all()

        let servicio = await Servicio.findOrFail(id)

        servicio.merge(servicio_data)

        await servicio.save()

        return response.status(201).json(servicio)
    }

    /**
     * Delete a class with id.
     * DELETE empresas/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        let { id } = params
        let servicio = await Servicio.findOrFail(id)

        await servicio.delete()

        return response.status(200).json({
            msg: 'Eliminado'
        })
    }
}

module.exports = ServicioController
