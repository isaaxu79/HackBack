'use strict'

const User = use('App/Models/User');

class AuthController {
   
    async register({request, auth, response}) {
        
        const username = request.input("username")
        const email = request.input("email")
        const password = request.input("password")
        const nombre = request.input("nombre")
        const imgPerfil = request.input("imgPerfil")
        const estado = request.input("estado")
        const ciudad = request.input("ciudad")
        const pais = request.input("pais")

        let user = new User()
        user.username = username
        user.email = email
        user.password = password
        user.nombre = nombre
        user.imgPerfil = imgPerfil
        user.estado = estado
        user.ciudad = ciudad
        user.pais = pais


        await user.save()
        let accessToken = await auth.generate(user)
        return response.json({"user": user, "access_token": accessToken})
    }

    async login({request, auth, response}) {
        const email = request.input("email")
        const password = request.input("password");
        try {
          if (await auth.attempt(email, password)) {
            let user = await User.findBy('email', email)
            let accessToken = await auth.generate(user)
            return response.json({"user":user, "access_token": accessToken})
          }

        }
        catch (e) {
          if(e.name == 'UserNotFoundException'){
            return response.json({message: 'You first need to register!'})
          }else{
            return response.json({message: 'invalid password'})
          }
          console.log(e)
          
        }
    }
    
    async destroy({ params, request, response }) {
        let { id } = params
        let user = await User.findOrFail(id)

        await user.delete()

        return response.status(200).json({
            msg: 'Eliminado'
        })
    }

}

module.exports = AuthController
