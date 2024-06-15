import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import 'dotenv/config';
import mongoose from 'mongoose';
import { MainRoutes } from './routes/Router';
import cors from '@fastify/cors'

class App {
  private server: FastifyInstance;

  constructor() {
    this.server = fastify();
    this.server.register(cors, {
      origin: ['http://localhost:5173']
    });
    this.routes();
    this.connectToDb();
  }

  private routes() {
    this.server.get('/', this.index);
    new MainRoutes(this.server);
  }

  private async index(request: FastifyRequest, reply: FastifyReply) {
    reply.send({ message: 'Seja, bem vindo' });
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
    const port = process.env.PORT || 3000;
    this.server.listen(
      {
        port: Number(port),
        host: '0.0.0.0'
      },
      (err, address) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        console.log(`Server is running on ${address} ✅`);
      }
    );
  }
}

const app = new App();
app.start();