'use strict'
const FotoEmpresa = use('App/Models/FotoEmpresa')
const Database = use('Database')
const Firebase = use('Perafan/Firebase');
const FirebaseAdmin = use('Perafan/FirebaseAdmin');

class FotoEmpresaController {
    async index({ request, response, view }) {
        let fotoempresas = await Database.table('foto_empresas')
        return response.status(201).json(fotoempresas)
    }

    async getByUser({ params, request, response, view }){
        let { id } = params
        let fotoempresa = await Database.table('foto_empresas').select('*').where('empresa_id',id)

        return response.status(201).json(fotoempresa)
    }

    /**
     * Create/save a new class.
     * POST empresas
     */
    async store({ request, response }) {
        let fotoempresa_data = request.all()
        

        let fotoempresa = await FotoEmpresa.create(fotoempresa_data)

        return response.status(201).json(fotoempresa)

    }

    /**
     * Display a single class.
     * GET empresas/:id
     */
    async show({ params, request, response, view }) {
        let { id } = params
        let fotoempresa = await FotoEmpresa.find(id)

        return response.status(201).json(fotoempresa)
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
        let fotoempresa_data = request.all()

        let fotoempresa = await FotoEmpresa.findOrFail(id)

        fotoempresa.merge(fotoempresa_data)

        await fotoempresa.save()

        return response.status(201).json(fotoempresa)
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
        let fotoempresa = await FotoEmpresa.findOrFail(id)

        await fotoempresa.delete()

        return response.status(200).json({
            msg: 'Eliminado'
        })
    }
}

module.exports = FotoEmpresaController
