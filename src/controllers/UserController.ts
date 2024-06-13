import { FastifyReply, FastifyRequest } from 'fastify';
import UserSchema from '../model/UserSchema';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface UserParams {
  id: string;
}

interface RegisterBody {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
  birthDate: Date;
  role: string;
  phone: string;
  username: string;
}

interface LoginBody {
  email: string;
  password: string;
}

export default class UserController {
  static async getUserById(request: FastifyRequest<{ Params: UserParams }>, reply: FastifyReply) {
    const id = request.params.id;
    const user = await UserSchema.findById(id).select('-password');
    if (!user) {
      reply.status(404).send({ msg: 'Usuário não encontrado!' });
      return;
    }
    reply.send({ user });
  }

  static async registerUser(request: FastifyRequest<{ Body: RegisterBody }>, reply: FastifyReply) {
    const { name, email, password, confirmpassword, birthDate, role, phone, username } = request.body;
    if (!name || !email || !password || password !== confirmpassword || !birthDate || !role || !phone || !username) {
      reply.status(422).send({ msg: 'Dados inválidos!' });
      return;
    }
    const userExists = await UserSchema.findOne({ email });
    if (userExists) {
      reply.status(422).send({ msg: 'Esse email já existe!' });
      return;
    }
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);
    const user = new UserSchema({ name, email, password: passwordHash, birthDate, role, phone, username });
    try {
      await user.save();
      reply.status(201).send({ status: 201, msg: 'Usuario criado com sucesso!' });
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      reply.status(500).send({ msg: 'Erro no servidor' });
    }
  }

  static async loginUser(request: FastifyRequest<{ Body: LoginBody }>, reply: FastifyReply) {
    const { email, password } = request.body;
    if (!email || !password) {
      reply.status(422).send({ status: 422, msg: 'Dados inválidos!' });
      return;
    }
    const user = await UserSchema.findOne({ email });
    if (!user) {
      reply.status(404).send({ status: 404, msg: 'Usuario não encontrado!' });
      return;
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      reply.status(422).send({ status: 422, msg: 'Senha Inválida!' });
      return;
    }
    try {
      const secret = process.env.SECRET;
      if (!secret) {
        throw new Error('SECRET não definido no arquivo .env');
      }
      const token = jwt.sign({ id: user._id }, secret);
      reply.send({ status: 201, msg: 'Autenticação realizada com sucesso!', token });
    } catch (err) {
      console.error('Erro ao realizar login:', err);
      reply.status(500).send({ msg: 'Erro no servidor' });
    }
  }
}
