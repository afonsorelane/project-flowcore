import { useEffect, useState } from "react";
import { getMyRequest } from "@/services/allUserRequest";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const Pedidos = () => {
  const [pedidos, setPedidos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPedidos() {
      setLoading(true);
      const response = await getMyRequest();
      if (response?.data) {
        setPedidos(response.data);
      }
      setLoading(false);
    }
    fetchPedidos();
  }, []);

  return (
    
    <div className="flex flex-col w-screen">
      <Header/>
      <main className="mx-auto mt-8 p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Meus Pedidos</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : pedidos.length === 0 ? (
        <p>Você ainda não fez nenhum pedido.</p>
      ) : (
        <ul className="space-y-4">
          {pedidos.map((pedido) => (
            <li key={pedido._id} className="border p-3 rounded">
              <div><strong>Status:</strong> {pedido.status}</div>
              <div><strong>Tipo:</strong> {pedido.type}</div>
              <div><strong>Data:</strong> {new Date(pedido.createdAt).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
    <Footer/>
    </div>
  );
};
