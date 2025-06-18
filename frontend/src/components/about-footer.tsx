import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const FooterLogin = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 grid md:grid-cols-2 gap-6">
      <div>
        <p>@2025 Todos os direitos reservados.</p>
      </div>
      <form className="space-y-4">
        <Input placeholder="Seu email" type="email" />
        <Textarea placeholder="Sua mensagem" />
        <Button type="submit">Submeter</Button>
      </form>
    </footer>
  );
};
