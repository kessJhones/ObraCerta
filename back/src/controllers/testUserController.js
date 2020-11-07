const usuario = require('../models/User')

module.exports = {

  async listUsers(request, response){
    const users = await usuario.findAll()
    return response.json(users)
  },

  async saveUser(request, response){

    const {nomeCompleto, email, hashSenha, telefone} = request.body;

    const user = await usuario.create({
      nomeCompleto: nomeCompleto, 
      email: email, 
      hashSenha: hashSenha, 
      telefone: telefone
    });
    return response.json(user);
  }

};