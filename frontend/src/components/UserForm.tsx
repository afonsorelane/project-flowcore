import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createUser } from '@/services/userService';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

export function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data: any) => {
    await createUser({ ...data, role: 'customer' });
    reset();
    alert('Usuário criado com sucesso');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <Input placeholder="Nome" {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}
      <Input placeholder="Email" {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      <Input type="password" placeholder="Senha" {...register('password')} />
      {errors.password && <span>{errors.password.message}</span>}
      <Button type="submit">Criar Cliente</Button>
    </form>
  );
}
