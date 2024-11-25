import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

const Tecnico = sequelize.define('Tecnico', {
    idTecnico: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
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
    estado: {
        type:DataTypes.STRING
    }
}, {
    tableName: 'tecnico',
    timestamps: false
});

export default Tecnico;
