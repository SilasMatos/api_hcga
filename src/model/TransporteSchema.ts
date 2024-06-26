import mongoose, { Schema, Document } from 'mongoose';

export interface ITransporte extends Document {
  paciente: string;
  maqueiro: string;
  dataHoraInicio: Date;
  dataHoraFim: Date;
  status: 'Aguardando' | 'Em transporte' | 'Concluído';
  location?: string;
  priority?: 'Baixa' | 'Média' | 'Alta';
  incidentReport?: string;
}

class Transporte {
  private schema: Schema;

  constructor() {
    this.schema = new Schema({
      paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true },
      maqueiro: { type: mongoose.Schema.Types.ObjectId, ref: 'Maqueiro', required: true },
      dataHoraInicio: { type: Date, default: Date.now },
      dataHoraFim: { type: Date },
      status: { type: String, enum: ['Aguardando', 'Em transporte', 'Concluído'], default: 'Aguardando' },
      location: { type: String, default: '' },
      priority: { type: String, enum: ['Baixa', 'Média', 'Alta'], default: 'Média' },
      incidentReport: { type: String, default: '' }
    });
  }

  public getModel() {
    return mongoose.model<ITransporte>('Transporte', this.schema);
  }
}

export default new Transporte().getModel();
