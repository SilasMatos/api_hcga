import { FastifyInstance, RouteGenericInterface } from 'fastify';
import * as TransporteController from '../controllers/TransporteController';

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
      handler: TransporteController.getAll
    });

    fastify.route<RouteParams>({
      method: 'GET',
      url: '/transportes/:id',
      handler: TransporteController.getOne
    });

    fastify.route<RouteParams>({
      method: 'PUT',
      url: '/transportes/:id',
      handler: TransporteController.update
    });

    fastify.route<RouteParams>({
      method: 'DELETE',
      url: '/transportes/:id',
      handler: TransporteController.deleteTransporte
    });
  }
}
