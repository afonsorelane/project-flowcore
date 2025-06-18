// Make sure the correct path to axios is used; adjust as needed:
import { api } from '../api/axios';
import type { DocumentType } from '../types/document';

export const getAllDocuments = async (): Promise<DocumentType[]> => {
  const res = await api.get('/request/allrequests');
  return res.data;
};

export const updateDocumentStatus = async (id: string, status: string) => {
  return await api.patch(`/request/${id}/status`, { status });
};