import express from 'express';
import rolRoutes from '../routes/rolRoutes.js';
import permisoRoutes from '../routes/permisoRoutes.js';
import tecnicoRoutes from '../routes/tecnicoRoute.js';
import categoriaTecnicoRoutes from '../routes/categoriaTecnicoRoute.js';
import servicioRoutes from '../routes/servicioRoutes.js';
import categoriaServicioRoutes from '../routes/categoriaServicioRoute.js';
import detalle_OSTRoute from '../routes/detalle_OSTRoute.js';
import usuarioRoute from '../routes/usuarioRoute.js';
import OrdenServicio from '../routes/ordenServicioRoute.js';
import Cliente from '../routes/clienteRoute.js';
import cors from 'cors';
import { sequelize } from '../database/config.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.rolPath = '/rol';
        this.permisoPath = '/permiso';
        this.servicioPath = '/servicio';
        this.tecnicoPath = '/tecnico';
        this.clientePath = '/cliente';
        this.categoriaTecnicoPath = '/categoriatecnico';
        this.categoriaServicioPath = '/categoriaservicio';
        this.detalle_OSTPath = '/detalle_ost';
        this.usuarioPath = '/usuario';
        this.ordePath = '/ordenservicio';

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await sequelize.authenticate();
            console.log('Database online');

            await sequelize.sync({ force: true});
            console.log('All models were synchronized successfully.');
        } catch (error) {
            throw new Error(error);
        }
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use(this.rolPath, rolRoutes);
        this.app.use(this.ordePath,OrdenServicio);
        this.app.use(this.permisoPath, permisoRoutes);
        this.app.use(this.tecnicoPath, tecnicoRoutes);
        this.app.use(this.categoriaTecnicoPath, categoriaTecnicoRoutes);
        this.app.use(this.servicioPath, servicioRoutes);
        this.app.use(this.categoriaServicioPath, categoriaServicioRoutes);
        this.app.use(this.detalle_OSTPath, detalle_OSTRoute);
        this.app.use(this.usuarioPath, usuarioRoute);
        this.app.use(this.ordePath, OrdenServicio);
        this.app.use(this.clientePath, Cliente)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }
}

export default Server;