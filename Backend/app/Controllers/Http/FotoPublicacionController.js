'use strict'
const FotoPublicacion = use('App/Models/FotoPublicacion')
const Database = use('Database')

class FotoPublicacionController {
    async index({ request, response, view }) {

        let fotopublicacions = await Database.table('foto_publicacions')
        return response.status(201).json(fotopublicacions)
    }

    async getByUser({ params, request, response, view }){
        let { id } = params
        let fotopublicacions = await Database.table('foto_publicacions').select('*').where('publicacion_id',id)

        return response.status(201).json(fotopublicacions)
    }

    /**
     * Create/save a new class.
     * POST empresas
     */
    async store({ request, response }) {
        let fotopublicacion_data = request.all()

        let fotopublicacion = await FotoPublicacion.create(fotopublicacion_data)

        return response.status(201).json(fotopublicacion)

    }

    /**
     * Display a single class.
     * GET empresas/:id
     */
    async show({ params, request, response, view }) {
        let { id } = params
        let fotopublicacion = await FotoPublicacion.find(id)

        return response.status(201).json(fotopublicacion)
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
        let fotopublicacion_data = request.all()

        let fotopublicacion = await FotoPublicacion.findOrFail(id)

        fotopublicacion.merge(fotopublicacion_data)

        await fotopublicacion.save()

        return response.status(201).json(fotopublicacion)
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
        let fotopublicacion = await FotoPublicacion.findOrFail(id)

        await fotopublicacion.delete()

        return response.status(200).json({
            msg: 'Eliminado'
        })
    }
}

module.exports = FotoPublicacionController
