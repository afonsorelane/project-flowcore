import mongoose, { Document } from "mongoose";

export interface DocumentProps extends Document {
  user: mongoose.Types.ObjectId;
  fileUrl: string;
  status: "pendente" | "aprovado" | "rejeitado";
  note: string;
  category:'Auditoria'|'Fiscalidade'|'Acessoria de gestão';
  submittedAt: Date;
  reviewedBy: string; // técnico
  reviewedAt: Date;
}
