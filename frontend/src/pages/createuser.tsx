import { UserForm } from '@/components/UserForm';

export const CreateUser = () => {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Criar Novo Cliente</h1>
      <UserForm />
    </main>
  );
}
