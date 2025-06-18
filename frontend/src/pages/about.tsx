import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

import { FooterLogin } from "@/components/about-footer";

export const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-800">
      {/* Header com fundo completo */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-between items-center p-6">
          <h1 className="text-white text-3xl font-bold">FLOWCORE</h1>
          <div className="space-x-4">
            <Button variant="outline">Login</Button>
            <Button>Register</Button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <section className="py-16 px-4 grid md:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="h-full">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Consultive</h2>
              <p>Serviços de consultoria personalizados para o seu negócio.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="h-full">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Fiscalidade</h2>
              <p>Planeamento e cumprimento das obrigações fiscais.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="h-full">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                Assessoria de Gestão
              </h2>
              <p>Apoio estratégico na gestão e tomada de decisões.</p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* About com imagem */}
      <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-16">
        <img
          src="/about.jpg"
          alt="About"
          className="w-full md:w-1/2 rounded-xl shadow-lg"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Sobre Nós</h2>
          <p>
            Somos uma empresa comprometida com a excelência em consultoria,
            fiscalidade e assessoria de gestão, ajudando os nossos clientes a
            alcançar os seus objetivos.
          </p>
        </div>
      </section>
      <FooterLogin />
    </div>
  );
};
