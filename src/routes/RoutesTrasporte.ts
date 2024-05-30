import { FastifyInstance, RouteGenericInterface } from 'fastify';
import * as TransporteController from '../controllers/TransporteController';
import { authMiddleware } from '../middleware/authMiddleware';
interface RouteParams extends RouteGenericInterface {
  Params: {
    id: string;
  };
}

export class TransporteRoutes {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      method: 'POST',
      url: '/transportes',
      handler: TransporteController.create
    });

    fastify.route({
      method: 'GET',
      url: '/transportes',
      handler: TransporteController.getAll,
      preHandler: [authMiddleware]
    });

    fastify.route<RouteParams>({
      method: 'GET',
      url: '/transportes/:id',
      handler: TransporteController.getOne
    });

    fastify.route<RouteParams>({
      method: 'PUT',
      url: '/transportes/:id/status',
      handler: TransporteController.updateStatus
    });

    fastify.route<RouteParams>({
      method: 'PUT',
      url: '/transportes/:id/prioridade',
      handler: TransporteController.updatePriority
    });

    fastify.route<RouteParams>({
      method: 'PUT',
      url: '/transportes/:id/incidente',
      handler: TransporteController.registerIncident
    });

    fastify.route<RouteParams>({
      method: 'PUT',
      url: '/transportes/:id/localizacao',
      handler: TransporteController.updateLocation
    });
  }
}
