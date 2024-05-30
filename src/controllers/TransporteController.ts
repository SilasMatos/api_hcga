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

export async function getOne(request: FastifyRequest<RouteParams>, reply: FastifyReply) {
  const id = request.params.id;
  const transporte = await Transporte.findById(id);
  reply.send(transporte);
}

export async function update(request: FastifyRequest<RouteParams>, reply: FastifyReply) {
  const id = request.params.id;
  const data: ITransporte = request.body as ITransporte;
  const updatedTransporte = await Transporte.findByIdAndUpdate(id, data, { new: true });
  reply.send(updatedTransporte);
}

export async function deleteTransporte(request: FastifyRequest<RouteParams>, reply: FastifyReply) {
  const id = request.params.id;
  const deletedTransporte = await Transporte.findByIdAndDelete(id);
  reply.send(deletedTransporte);
}

export async function getAll(request: FastifyRequest, reply: FastifyReply) {
  const transportes = await Transporte.find();
  reply.send(transportes);
}