import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import 'dotenv/config';
import mongoose from 'mongoose';
import { MainRoutes } from './routes/Router';

class App {
  private server: FastifyInstance;

  constructor() {
    this.server = fastify();
    this.routes();
    this.connectToDb();
  }

  private routes() {
    this.server.get('/', this.index);
    new MainRoutes(this.server);
  }

  private async index(request: FastifyRequest, reply: FastifyReply) {
    reply.send({ message: 'Hello, World!' });
  }

  private async connectToDb() {
    try {
      await mongoose.connect('mongodb+srv://silasmatosym:dJCei65B6zXANKwa@hgcadb.hqe9oxo.mongodb.net/?retryWrites=true&w=majority&appName=hgcadb');
      console.log('Connected to MongoDB ✅');
    } catch (error) {
      console.error('Error connecting to MongoDB ❌', error);
    }
  }

  public start() {
    this.server.listen(
      {
        port: 3000
      },
      () => console.log('Server is running on http://localhost:3000 ✅')
    );
  }
}

const app = new App();
app.start();
