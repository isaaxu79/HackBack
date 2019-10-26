'use strict'
const Favorito = use('App/Models/Favorito')
const Database = use('Database')

class FavoritoController {
    async index({ request, response, view }) {

        let favoritos = await Database.table('favoritos')
        return response.status(201).json(favoritos)
    }

    async getByUser({ params, request, response, view }){
        let { id } = params
        let favoritos = await Database.table('favoritos').innerJoin('publicacions','favoritos.publicacion_id','publicacions.id').where('usuario_id',id)

        return response.status(201).json(favoritos)
    }

    /**
     * Create/save a new class.
     * POST empresas
     */
    async store({ request, response }) {
        let favorito_data = request.all()

        let favorito = await Favorito.create(favorito_data)

        return response.status(201).json(favorito)

    }

    /**
     * Display a single class.
     * GET empresas/:id
     */
    async show({ params, request, response, view }) {
        let { id } = params
        let favorito = await Favorito.find(id)

        return response.status(201).json(favorito)
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
        let favorito_data = request.all()

        let favorito = await Favorito.findOrFail(id)

        favorito.merge(favorito_data)

        await favorito.save()

        return response.status(201).json(favorito)
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
        let favorito = await Favorito.findOrFail(id)

        await favorito.delete()

        return response.status(200).json({
            msg: 'Eliminado'
        })
    }
}

module.exports = FavoritoController
