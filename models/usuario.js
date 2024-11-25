import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

const Usuario = sequelize.define('Usuario', {
    idUsuario: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.STRING,
    }
},{
    tableName: 'usuarios',
    timestamps: false
});

export default Usuario;