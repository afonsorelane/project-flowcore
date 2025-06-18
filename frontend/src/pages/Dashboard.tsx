import { useEffect, useState } from 'react';
import { getAllDocuments, updateDocumentStatus } from '@/services/documentService';
import { DocumentTable } from '@/components/DocumentTable';
import type { DocumentType } from '@/types/document';
import {Header} from '@/components/header'
import {Footer} from '@/components/footer'

export const Dashboard = () => {
  const [documents, setDocuments] = useState<DocumentType[]>([]);

  const load = async () => {
    const data = await getAllDocuments();
    setDocuments(data);
    console.log(data);
  };

  useEffect(() => { load(); }, []);

  const handleStatus = async (id: string, status: 'aprovado' | 'rejeitado') => {
    await updateDocumentStatus(id, status);
    load();
  };

  return (
    <>
    <Header />
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Painel Técnico</h1>
      <DocumentTable documents={documents} onApprove={(id) => handleStatus(id, 'aprovado')} onReject={(id) => handleStatus(id, 'rejeitado')} />
    </main>
    <Footer />
    </>
  );
}
