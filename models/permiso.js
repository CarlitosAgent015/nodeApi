import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

const Permiso = sequelize.define('Permiso', {
    idPermiso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
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
    tableName: 'permisos',
    timestamps: false
});


export default Permiso;