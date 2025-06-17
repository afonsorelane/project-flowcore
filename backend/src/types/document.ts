import mongoose, { Document } from "mongoose";

export interface DocumentProps extends Document {
  user: mongoose.Types.ObjectId;
  clientId: string;
  fileUrl: String;
  status: "pendente" | "aprovado" | "rejeitado";
  validationMessage: String;
  submittedAt: Date;
  reviewedBy: string; // técnico
  reviewedAt: Date;
}
