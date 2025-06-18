
export function ErrorPage({ message = "Ops, me parece que estás perdido." }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white px-8 py-10 rounded-xl shadow-lg text-center">
        <h1 className="text-5xl font-bold text-red-500 mb-4">Erro</h1>
        <h1 className="text-[10rem] font-mono font-extrabold text-white animate-pulse leading-none">
          404
        </h1>
        <p className="text-lg text-gray-700 mb-6">{message}</p>
        <button
          className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition"
          onClick={() => window.location.href = "/"}
        >
          Voltar para o início
        </button>
      </div>
    </div>
  );
}