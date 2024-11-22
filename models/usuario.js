import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

const Usuario = sequelize.define('Usuario', {
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.ENUM('activo', 'inactivo'),
        defaultValue: 'activo'
    }
},{
    tableName: 'usuarios',
    timestamps: false
});

export default Usuario;