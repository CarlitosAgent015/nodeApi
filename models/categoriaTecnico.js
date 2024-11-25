import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

const CategoriaTecnico = sequelize.define('CategoriaTecnico', {
    idCategoria: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'categoria_tecnico',
    timestamps: false
});

export default CategoriaTecnico;
