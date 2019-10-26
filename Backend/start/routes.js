'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/auth/register', 'AuthController.register')
Route.post('/auth/login', 'AuthController.login')


Route.group(() => {
  Route.resource('empresa', 'EmpresaController').apiOnly()
  Route.resource('comun', 'ComunController').apiOnly()
  Route.resource('mascota', 'MascotaController').apiOnly()
  Route.resource('publicacion', 'PublicacionController').apiOnly()
  Route.resource('foto_empresa', 'FotoEmpresaController').apiOnly()
  Route.resource('foto_publicacion', 'FotoPublicacionController').apiOnly()
  Route.resource('favoritos', 'FavoritoController').apiOnly()

  Route.get('mascotas/mypets/:id','MascotaController.getByUser')
  Route.get('mascotas/pets','MascotaController.getByName')
  Route.get('comun/user/:id','ComunController.getByUser')
  Route.get('empresa/user/:id','EmpresaController.getByUser')
  Route.get('favorito/user/:id','FavoritoController.getByUser')
  Route.get('foto_empresa/user/:id','FotoEmpresaController.getByUser')
  Route.get('foto_empresa/user/:id','FotoPublicacionController.getByUser')
  Route.get('publicacion/user/:id','PublicacionController.getByUser')
  Route.post('publicacion/filter','PublicacionController.filter')

  Route.delete('/delete/:id', 'AuthController.destroy')

}).prefix('api/v1')
//.middleware('auth')