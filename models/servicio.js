// models/Servicio.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

const Servicio = sequelize.define('Servicio', {
    idServicio: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true, // Asegúrate de que este sea un PK
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'servicios',
    timestamps: false
});

export default Servicio;
