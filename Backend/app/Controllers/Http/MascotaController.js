'use strict'
const Mascota = use('App/Models/Mascota')
const Database = use('Database')

class MascotaController {
    async index({ request, response, view }) {

        let mascotas = await Database.table('mascotas')
        return response.status(201).json(mascotas)
    }


    /**
     * Create/save a new class.
     * POST empresas
     */
    async store({ request, response }) {
        let mascota_data = request.all()

        let mascota = await Mascota.create(mascota_data)

        return response.status(201).json(mascota)

    }

    /**
     * Display a single class.
     * GET empresas/:id
     */
    async show({ params, request, response, view }) {
        let { id } = params
        let mascota = await Mascota.find(id)

        return response.status(201).json(mascota)
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
        let mascota_data = request.all()

        let mascota = await Mascota.findOrFail(id)

        mascota.merge(mascota_data)

        await mascota.save()

        return response.status(201).json(mascota)
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
        let mascota = await Mascota.findOrFail(id)

        await mascota.delete()

        return response.status(200).json({
            msg: 'Eliminado'
        })
    }
}

module.exports = MascotaController
