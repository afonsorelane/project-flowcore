import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

import { FooterLogin } from "@/components/about-footer";
import { useNavigate } from "react-router-dom";

export const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-800">
      {/* Header com fundo completo */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://pgbr.net.br/wp-content/uploads/2023/04/PGBR-POSTAR-AGORA-1.jpeg")',
          height: 500
        }}

      >
        <div className="flex justify-between p-4">
          <h1 className="text-gray-800 text-3xl font-bold">FLOWCORE</h1>
          <div className="space-x-4">
            <Button variant="outline" onClick={() => navigate("/login")}>Iniciar Sessão</Button>
            <Button>Registar</Button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <section className="py-16 px-4 grid md:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="h-full">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Auditória</h2>
              <p>Actuamos com foco na avaliação de processos, identificação de riscos, conformidade normativa e melhoria contínua.</p>
              <p>Oferecemos auditorias personalizadas para empresas que buscam segurança, credibilidade e eficiência em sua gestão.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="h-full">
            <CardContent className="p-10">
              <h2 className="text-xl font-semibold mb-2">Fiscalização</h2>
              <p>Garanta o cumprimento de normas, prazos e padrões com os nossos serviços especializados de fiscalização. Atuamos com foco em controle, qualidade, conformidade técnica e segurança, acompanhando todas as etapas dos processos ou projetos.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="h-full">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                Assessoria
              </h2>
              <p>Conte com uma assessoria estratégica, personalizada e contínua para apoiar suas decisões e garantir mais eficiência e segurança.</p>
              <p>Oferecemos suporte técnico e especializado, com foco em planejamento, organização e acompanhamento de processos.</p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* About com imagem */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 ">
        <img
          src="/img/hackathon-img2.jpg"
          alt="About"
          className="h-00 w-100 rounded-lg "
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 justify-center">Sobre Nós</h2>
          <p>
            Somos uma empresa especializada em consultoria, fiscalização e assessoria, comprometida em oferecer soluções inteligentes, personalizadas e eficazes para nossos clientes.</p>

          <p>Com uma equipe multidisciplinar, experiente e atualizada com as melhores práticas do mercado, atuamos de forma estratégica para apoiar pessoas, empresas e órgãos públicos na tomada de decisões, no cumprimento de normas e na execução eficiente de processos e projetos.
          </p>
        </div>
      </section>
      <FooterLogin />
    </div>
  );
};
