export type DocumentStatus = 'pendente' | 'aprovado' | 'rejeitado';

export interface DocumentType {
  _id: string;
  fileUrl: string;
  status: DocumentStatus;
  category: string;
  note: string;
  submittedAt: string;
  reviewedBy: string;
  reviewedAt: string | null;
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
  };
}