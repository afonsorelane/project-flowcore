import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createUser } from '@/services/userService';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  name: z.string().min(2, 'Nome obrigatório'),
  email: z.string().email('Email inválido'),
  role: z.enum(['customer', 'technical']).default('customer'),
});

export function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data: any) => {
    try {
      await createUser(data);
      reset();
      alert('Usuário criado com sucesso. A senha foi enviada por email.');
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Erro ao criar usuário');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <Input placeholder="Nome" {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}
      <Input placeholder="Email" {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      <select {...register('role')} className="input input-bordered w-full">
        <option value="customer">Cliente</option>
        <option value="technical">Técnico</option>
      </select>
      {errors.role && <span>{errors.role.message}</span>}
      <Button type="submit">Criar Cliente</Button>
    </form>
  );
}