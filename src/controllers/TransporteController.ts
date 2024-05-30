import { FastifyReply, FastifyRequest, RouteGenericInterface } from 'fastify';
import Transporte from '../model/TransporteSchema';
import { ITransporte } from '../model/TransporteSchema';

interface RouteParams extends RouteGenericInterface {
  Params: {
    id: string;
  };
}

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const data: ITransporte = request.body as ITransporte;
  const newTransporte = new Transporte(data);
  const transporte = await newTransporte.save();
  reply.send(transporte);
}

export async function getAll(request: FastifyRequest, reply: FastifyReply) {
  const transportes = await Transporte.find();
  reply.send(transportes);
}

export async function getOne(request: FastifyRequest<RouteParams>, reply: FastifyReply) {
  const id = request.params.id;
  const transporte = await Transporte.findById(id);
  reply.send(transporte);
}

export async function updateStatus(request: FastifyRequest<RouteParams>, reply: FastifyReply) {
  const id = request.params.id;
  const { status } = request.body as { status: 'Aguardando' | 'Em transporte' | 'Concluído' };
  const updatedTransporte = await Transporte.findByIdAndUpdate(id, { status }, { new: true });
  reply.send(updatedTransporte);
}

export async function updatePriority(request: FastifyRequest<RouteParams>, reply: FastifyReply) {
  const id = request.params.id;
  const { priority } = request.body as { priority: 'Baixa' | 'Média' | 'Alta' };
  const updatedTransporte = await Transporte.findByIdAndUpdate(id, { priority }, { new: true });
  reply.send(updatedTransporte);
}

export async function registerIncident(request: FastifyRequest<RouteParams>, reply: FastifyReply) {
  const id = request.params.id;
  const { incidentReport } = request.body as { incidentReport: string };
  const updatedTransporte = await Transporte.findByIdAndUpdate(id, { incidentReport }, { new: true });
  reply.send(updatedTransporte);
}

export async function updateLocation(request: FastifyRequest<RouteParams>, reply: FastifyReply) {
  const id = request.params.id;
  const { location } = request.body as { location: string };
  const updatedTransporte = await Transporte.findByIdAndUpdate(id, { location }, { new: true });
  reply.send(updatedTransporte);
}
