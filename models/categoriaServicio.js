// models/CategoriaServicio.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

const CategoriaServicio = sequelize.define('CategoriaServicio', {
    idCategoria: {
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
}, {
    tableName: 'categorias_servicio',
    timestamps: false
});

export default CategoriaServicio;
