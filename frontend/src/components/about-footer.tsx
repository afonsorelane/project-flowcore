import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const FooterLogin = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 grid md:grid-cols-2 gap-6 justify-between">
      <div>
        <h1>📍 Empresa Flowcore Ltda.</h1>
        <p>Especialistas em consultoria, fiscalização e assessoria.</p>
        <p>🔒 Atuação com ética, confidencialidade e responsabilidade profissional.</p>
        <p>@2025 Todos os direitos reservados.</p>
      </div>
      <form className="space-y-4 w-100">
        <h1>Entre ontacto</h1>
        <Input placeholder="Seu email" type="email" />
        <Textarea placeholder="Sua mensagem" />
        <Button type="submit">Submeter</Button>
      </form>
      <p>Feito pelos estudantes da B4F</p>

    </footer>
  );
};
