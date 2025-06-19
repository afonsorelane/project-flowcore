import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { UserForm } from '@/components/UserForm';

export const CreateUser = () => {
  return (
    <div className='flex flex-col min-h-screen'>
    <Header/>
    <main className='flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white p-4'>
      <h1 className="text-2xl font-bold mb-4">Criar Novo Cliente</h1>
      <UserForm />
    </main>
    <Footer />
    </div>
  );
}
