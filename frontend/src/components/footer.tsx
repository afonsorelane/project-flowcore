export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-3xl">#</div>
          <p className="mt-2">
            FLOWCORE.
            <br />
            Fornecendo tecnologia confiável desde 1992
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase mb-2">Serviços</h3>
          <ul className="space-y-1 text-sm">
            <li>Consultoria Estratégica</li>
            <li>Consultoria Fiscal</li>
            <li>Consultoria em Gestão</li>
            <li>Planejamento Financeiro</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase mb-2">Empresa</h3>
          <ul className="space-y-1 text-sm">
            <li>Sobre nós</li>
            <li>Contato</li>
            <li>Trabalhe conosco</li>
            <li>Kit de imprensa</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li>Termos de uso</li>
            <li>Política de privacidade</li>
            <li>Política de cookies</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
