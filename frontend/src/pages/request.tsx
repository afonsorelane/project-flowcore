import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useNavigate } from "react-router-dom";

export const RequestPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white p-0">
        <div className="flex flex-row w-full max-w-5xl h-[70vh] rounded-xl shadow-2xl overflow-hidden border border-blue-100">
          {/* Imagem temática à esquerda */}
          <div className="w-1/2 bg-blue-100 flex items-center justify-center relative">
            <img
              src="/consulting-theme.jpg" // coloque sua imagem em public/ e ajuste o nome
              alt="Consultoria"
              className="object-cover w-full h-full"
            />
            {/* Overlay para efeito visual */}
            <div className="absolute inset-0 bg-blue-900 bg-opacity-30 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold text-white drop-shadow mb-2">
                Serviços Flowcore
              </h2>
              <p className="text-lg text-blue-100 text-center max-w-xs">
                Soluções em Auditoria, Fiscalização e Assessoria para o seu
                negócio.
              </p>
            </div>
          </div>
          {/* Botões à direita */}
          <div className="w-1/2 flex flex-col items-center justify-center gap-8 bg-white">
            <h1 className="text-2xl font-bold text-blue-900 mb-6">
              Escolha o serviço
            </h1>
            <Button
              onClick={() => navigate("/requestform")}
              className="w-3/4 h-20 text-xl bg-blue-700 hover:bg-blue-800 text-white shadow-lg rounded-lg transition-all duration-200"
            >
              Auditoria
            </Button>
            <Button
              onClick={() => navigate("/dashboard")}
              className="w-3/4 h-20 text-xl bg-green-600 hover:bg-green-700 text-white shadow-lg rounded-lg transition-all duration-200"
            >
              Fiscalização
            </Button>
            <Button
              onClick={() => navigate("/newuser")}
              className="w-3/4 h-20 text-xl bg-red-600 hover:bg-red-700 text-white shadow-lg rounded-lg transition-all duration-200"
            >
              Assessoria
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
