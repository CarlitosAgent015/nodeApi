// models/OrdenServicio.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';
import Cliente from './cliente.js';  // Asegúrate de importar el modelo correcto

const OrdenServicio = sequelize.define('OrdenServicio', {
    idOrden: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Clave foránea que apunta al Cliente
    idCliente: {
        type: DataTypes.INTEGER,
        references: {
            model: Cliente,
            key: 'idCliente'
        }
    }
    // Aquí se podría incluir más campos como detalles del servicio
}, {
    tableName: 'ordenes_servicio',
    timestamps: false
});

// Relación de muchos a uno con Cliente
Cliente.hasMany(OrdenServicio, {
    foreignKey: 'idCliente',
    as: 'ordenes'  // alias para la relación
});
OrdenServicio.belongsTo(Cliente, {
    foreignKey: 'idCliente',
    as: 'cliente'  // alias para la relación
});

export default OrdenServicio;
