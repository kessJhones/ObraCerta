const {Model, DataTypes} = require('sequelize')

class User extends Model{
  static init(connection){
    super.init({
      idUsuario : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true,
        allowNull: false,
      },
      nomeCompleto: DataTypes.STRING(100),
      email: DataTypes.STRING(50),
      hashSenha: DataTypes.STRING(),
      telefone: DataTypes.STRING(20),

      criadoEm:{
        type: DataTypes.DATE,
        defaultValue : DataTypes.NOW,
      },
    },
    {
      sequelize: connection,
      modelName: 'usuario',
      freezeTableName : true
      
    })
  }
}

module.exports = User;