import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { api } from '../api/axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const schema = z.object({
  category: z.enum(['auditoria', 'fiscalidade', 'acessoria de gestão']),
  note: z.string().optional(),
  file: z
    .any()
    .refine((file) => file?.[0]?.type === 'application/pdf', {
      message: 'O arquivo precisa ser um PDF',
    }),
});

export const SubmitDocument = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', data.file[0]);
    formData.append('category', data.category);
    formData.append('note', data.note || '');

    try {
      await api.post('/request', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Documento submetido com sucesso!');
    } catch (err) {
      console.error(err);
      alert('Erro ao enviar o documento.');
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-4 p-4">
      <label className="block">
        Categoria:
        <select {...register('category')} className="w-full border p-2">
          <option value="auditoria">Auditoria</option>
          <option value="fiscalidade">Fiscalidade</option>
          <option value="acessoria de gestão">Acessoria de Gestão</option>
        </select>
        {errors.category && <span className="text-red-500">{errors.category.message}</span>}
      </label>

      <label className="block">
        Nota (opcional):
        <Textarea {...register('note')} placeholder="Observações adicionais..." />
      </label>

      <label className="block">
        Arquivo PDF:
        <Input type="file" accept="application/pdf" {...register('file')} />
        {typeof errors.file?.message === 'string' && <span className="text-red-500">{errors.file.message}</span>}
      </label>

      <Button type="submit" disabled={loading}>
        {loading ? 'Enviando...' : 'Submeter Documento'}
      </Button>
    </form>
  );
}