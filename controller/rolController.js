import Rol from '../models/rol.js';

export const getRoles = async (req, res) => {
    try {
        const roles = await Rol.findAll();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getIdRoles = async (req, res) => {
    try {
        const { id } = req.params;
        const roles = await Rol.findByPk(id); 
        if (!roles) {
            return res.status(404).json({ message: 'Permiso no encontrado' });
        }
        res.json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo rol y asociar permisos por nombre
export const postRoles = async (req, res) => {
    try {
        const { idRol, nombre, descripcion, estado, permisosNombres } = req.body;
        
        // Crear un nuevo rol
        const nuevoRol = await Rol.create({ idRol, nombre, descripcion, estado });

        // Asociar los permisos si los hay
        if (permisosNombres && permisosNombres.length > 0) {
            const permisos = await Permiso.findAll({
                where: { nombre: permisosNombres } // Buscar permisos por nombre
            });
            await nuevoRol.addPermisos(permisos);  // Asociación de permisos al rol
        }

        res.status(201).json({ message: 'Rol creado exitosamente', rol: nuevoRol });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un rol existente y asociar permisos por nombre
export const putRoles = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, estado, permisosNombres } = req.body;
        
        const rol = await Rol.findByPk(id); 
        if (!rol) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }

        // Actualizar los datos del rol
        await rol.update({ nombre, descripcion, estado });

        // Actualizar los permisos asociados si se proporcionan nombres de permisos
        if (permisosNombres && permisosNombres.length > 0) {
            const permisos = await Permiso.findAll({
                where: { nombre: permisosNombres } // Buscar permisos por nombre
            });
            await rol.setPermisos(permisos);  // Reemplazar los permisos actuales por los nuevos
        }

        res.json({ message: 'Rol actualizado correctamente', rol });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteRoles = async (req, res) => {
    try {
        const { id } = req.params;
        const roles = await Rol.findByPk(id);
        if (!roles) {
            return res.status(404).json({ message: 'Permiso no encontrado' });
        }
        await roles.destroy(); 
        res.json({ message: 'Permiso eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
