import { FastifyInstance } from 'fastify';
import { PacienteRoutes } from './RouterPaciente';
import { TransporteRoutes } from './RoutesTrasporte';
import { UserRoutes } from './RoutesUser';

export class MainRoutes {
  constructor(fastify: FastifyInstance) {
    new PacienteRoutes(fastify);
    new TransporteRoutes(fastify);
    new UserRoutes(fastify);
  }
}
