import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';
import CategoriaTecnico from './categoriaTecnico.js'; // Asegúrate de importar el modelo

const Tecnico = sequelize.define('Tecnico', {
    idTecnico: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        references: {
            model: CategoriaTecnico,
            key: 'idCategoria'
        }
    }
}, {
    tableName: 'tecnico',
    timestamps: false
});

// Relación de muchos a uno
CategoriaTecnico.hasMany(Tecnico, {
    foreignKey: 'categoriaId',
    as: 'tecnicos'  // alias para la relación
});
Tecnico.belongsTo(CategoriaTecnico, {
    foreignKey: 'categoriaId',
    as: 'categoria'  // alias para la relación
});

export default Tecnico;
