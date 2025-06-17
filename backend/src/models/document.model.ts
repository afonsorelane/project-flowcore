import mongoose, { Schema } from 'mongoose'
import { DocumentProps } from '../types/document.ts'

const documentSchema = new Schema<DocumentProps>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    clientId: { type: String, required: true },
    fileUrl: { type: String, required: true },
    status: {
      type: String,
      enum: ['pendente', 'aprovado', 'rejeitado'],
      default: 'pendente',
    },
    validationMessage: { type: String, default: '' },
    submittedAt: { type: Date, default: Date.now },
    reviewedBy: { type: String, default: '' }, // técnico
    reviewedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
)

export const Document = mongoose.model<DocumentProps>(
  'Document',
  documentSchema
)
