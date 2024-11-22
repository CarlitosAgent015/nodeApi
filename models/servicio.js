// models/Servicio.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';
import CategoriaServicio from './categoriaServicio.js';

const Servicio = sequelize.define('Servicio', {
    idServicio: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    // Aquí se define la clave foránea
    categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: CategoriaServicio, // referencia al modelo CategoriaServicio
            key: 'idCategoria', // clave en CategoriaServicio
        },
    },
}, {
    tableName: 'servicios',
    timestamps: false
});

Servicio.belongsTo(CategoriaServicio, { foreignKey: "categoriaId" });
CategoriaServicio.hasMany(Servicio, { foreignKey: "categoriaId" });


export default Servicio;
