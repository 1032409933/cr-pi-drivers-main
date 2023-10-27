const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define ("Driver",{
      ID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      forename: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 50], // Mínimo 2 caracteres y máximo 50 caracteres
            msg: "El nombre debe tener entre 2 y 50 caracteres.",
          },
        },
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 50], // Mínimo 2 caracteres y máximo 50 caracteres
            msg: "El apellido debe tener entre 2 y 50 caracteres.",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: {
            args: true,
            msg: "La imagen debe ser una URL válida.",
          },
        },
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 50], // Mínimo 2 caracteres y máximo 50 caracteres
            msg: "La nacionalidad debe tener entre 2 y 50 caracteres.",
          },
        },
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: {
            args: true,
            msg: "La fecha de nacimiento no es válida.",
          },
        },
      },
      created: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
  },{timestamps:false})
  }