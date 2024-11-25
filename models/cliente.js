// models/Cliente.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

const Cliente = sequelize.define('Cliente', {
    idCliente: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    telefono: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'clientes',
    timestamps: false
});

export default Cliente;
