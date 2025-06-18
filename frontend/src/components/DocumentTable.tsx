import type { DocumentType } from '../types/document';
import { Button } from '@/components/ui/button';

export function DocumentTable({
  documents,
  onApprove,
  onReject,
}: {
  documents: DocumentType[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}) {
  return (
    <div className="overflow-auto rounded-lg shadow">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-200">
          <tr>
            <th>Cliente</th>
            <th>Email</th>
            <th>Status</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc._id} className="border-b">
              <td>{doc.user?.name || 'Sem nome'}</td>
              <td>{doc.user?.email || 'Sem email'}</td>
              <td>{doc.status}</td>
              <td>{doc.category}</td>
              <td className="flex gap-2">
                <Button variant="outline" onClick={() => onApprove(doc._id)}>Aprovar</Button>
                <Button variant="destructive" onClick={() => onReject(doc._id)}>Rejeitar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}