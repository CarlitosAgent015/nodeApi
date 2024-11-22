import Usuario from '../models/usuario.js';

export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getIdUsuarios = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarios = await Usuario.findByPk(id); 
        if (!usuarios) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const postUsuarios = async (req, res) => {
    try {
        const { idUsuario, nombre, descripcion, estado } = req.body;
        const nuevoUsuario = await Usuario.create({ idUsuario, nombre, descripcion, estado }); 
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const putUsuarios = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, estado } = req.body;
        const usuarios = await Usuario.findByPk(id); 
        if (!usuarios) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        await usuarios.update({ nombre, descripcion, estado }); 
        res.json(usuarios);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteUsuarios = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarios = await Usuario.findByPk(id);
        if (!usuarios) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        await usuarios.destroy(); 
        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
