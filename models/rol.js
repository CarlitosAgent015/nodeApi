import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';
import Permiso from './permiso.js';

const Rol = sequelize.define('Rol', {
    idRol: {
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
    tableName: 'roles',
    timestamps: false
});

Rol.belongsToMany(Permiso, { through: 'RolPermiso', foreignKey: 'idRol', otherKey: 'idPermiso'});

export default Rol;