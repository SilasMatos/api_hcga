import { FastifyInstance, RouteGenericInterface } from 'fastify';
import * as PacienteController from '../controllers/PacienteController';

interface RouteParams extends RouteGenericInterface {
  Params: {
    id: string;
  };
}

export class PacienteRoutes {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      method: 'POST',
      url: '/pacientes',
      handler: PacienteController.create
    });

    fastify.route({
      method: 'GET',
      url: '/pacientes',
      handler: PacienteController.getAll
    });

    fastify.route<RouteParams>({
      method: 'GET',
      url: '/pacientes/:id',
      handler: PacienteController.getOne
    });

    fastify.route<RouteParams>({
      method: 'PUT',
      url: '/pacientes/:id',
      handler: PacienteController.update
    });

    fastify.route<RouteParams>({
      method: 'DELETE',
      url: '/pacientes/:id',
      handler: PacienteController.deletePaciente
    });
  }
}
