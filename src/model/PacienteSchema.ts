import mongoose, { Schema, Document } from 'mongoose';


export interface IPaciente extends Document {
  nome: string;
  localizacaoAtual: string;
  status: 'Aguardando' | 'Em transporte' | 'Chegou';
  urgencia: 'Alta' | 'Média' | 'Baixa';
}

class Paciente {

  private schema: Schema;

  constructor() {
    this.schema = new Schema({
      nome: { type: String, required: true },
      localizacaoAtual: { type: String, required: true },
      status: { type: String, enum: ['Aguardando', 'Em transporte', 'Chegou'], default: 'Aguardando' },
      urgencia: { type: String, enum: ['Alta', 'Média', 'Baixa'], required: true }
    });
  }

  public getModel() {
    return mongoose.model<IPaciente>('Paciente', this.schema);
  }
}

export default new Paciente().getModel();