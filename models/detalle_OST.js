// models/DetalleOrdenServicio.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';
import OrdenServicio from './ordenServicio.js';
import Servicio from './servicio.js';
import Tecnico from './tecnico.js';

const DetalleOrdenServicio = sequelize.define('DetalleOrdenServicio', {
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fecha_final: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    // Clave foránea para la orden de servicio
    idOrden: {
        type: DataTypes.INTEGER,
        references: {
            model: OrdenServicio,
            key: 'idOrden'
        },
        allowNull: false,
    },
    // Clave foránea para el servicio
    idServicio: {
        type: DataTypes.INTEGER,
        references: {
            model: Servicio,
            key: 'idServicio'
        },
        allowNull: false,
    },
    // Clave foránea para el técnico
    idTecnico: {
        type: DataTypes.INTEGER,
        references: {
            model: Tecnico,
            key: 'idTecnico'
        },
        allowNull: false,
    }
}, {
    tableName: 'detalles_orden_servicio',
    timestamps: false, // Si no necesitas timestamps, puedes desactivarlos
});

// Relación de muchos a uno con OrdenServicio
OrdenServicio.hasMany(DetalleOrdenServicio, {
    foreignKey: 'idOrden',
    as: 'detalles'  // alias para la relación
});
DetalleOrdenServicio.belongsTo(OrdenServicio, {
    foreignKey: 'idOrden',
    as: 'orden'  // alias para la relación
});

// Relación de muchos a uno con Servicio
Servicio.hasMany(DetalleOrdenServicio, {
    foreignKey: 'idServicio',
    as: 'detallesServicios'  // alias para la relación
});
DetalleOrdenServicio.belongsTo(Servicio, {
    foreignKey: 'idServicio',
    as: 'servicio'  // alias para la relación
});

// Relación de muchos a uno con Tecnico
Tecnico.hasMany(DetalleOrdenServicio, {
    foreignKey: 'idTecnico',
    as: 'detallesTecnicos'  // alias para la relación
});
DetalleOrdenServicio.belongsTo(Tecnico, {
    foreignKey: 'idTecnico',
    as: 'tecnico'  // alias para la relación
});

export default DetalleOrdenServicio;
