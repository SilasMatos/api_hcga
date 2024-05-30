import { FastifyReply, FastifyRequest, RouteGenericInterface } from 'fastify';
import Paciente from '../model/PacienteSchema';
import { IPaciente } from '../model/PacienteSchema';

interface RouteParams extends RouteGenericInterface {
  Params: {
    id: string;
  };
}
export async function create(request: FastifyRequest, reply: FastifyReply) {
  const data: IPaciente = request.body as IPaciente;
  const newPaciente = new Paciente(data);
  const paciente = await newPaciente.save();
  reply.send(paciente);
}
export async function getOne(request: FastifyRequest<RouteParams>, reply: FastifyReply) {
  const id = request.params.id;
  const paciente = await Paciente.findById(id);
  reply.send(paciente);
}

export async function update(request: FastifyRequest<RouteParams>, reply: FastifyReply) {
  const id = request.params.id;
  const data: IPaciente = request.body as IPaciente;
  const updatedPaciente = await Paciente.findByIdAndUpdate(id, data, { new: true });
  reply.send(updatedPaciente);
}

export async function deletePaciente(request: FastifyRequest<RouteParams>, reply: FastifyReply) {
  const id = request.params.id;
  const deletedPaciente = await Paciente.findByIdAndDelete(id);
  reply.send(deletedPaciente);
}
export async function getAll(request: FastifyRequest, reply: FastifyReply) {
  const pacientes = await Paciente.find();
  reply.send(pacientes);
}