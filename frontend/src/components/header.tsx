import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-60 flex justify-between items-center p-6 z-50">
      <h1 className="text-black text-3xl font-bold">FLOWCORE</h1>
      <nav className="space-x-6">
        <Link
          to="/"
          className="text-black hover:text-blue-300 text-lg transition"
        >
          Casa
        </Link>
        <Link
          to="/pedidos"
          className="text-black hover:text-blue-300 text-lg transition"
        >
          Meus Pedidos
        </Link>
      </nav>
    </header>
  );
};
