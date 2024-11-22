// controllers/clienteController.js
import Cliente from '../models/cliente.js';

// Obtener todos los clientes
export const getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un cliente por ID
export const getClienteById = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo cliente
export const postCliente = async (req, res) => {
    try {
        const { idCliente, nombre, email, telefono } = req.body;
        const nuevoCliente = await Cliente.create({ idCliente, nombre, email, telefono });
        res.status(201).json(nuevoCliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un cliente
export const putCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email, telefono } = req.body;
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        await cliente.update({ nombre, email, telefono });
        res.json(cliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un cliente
export const deleteCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        await cliente.destroy();
        res.json({ message: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
