import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext.ts";

export function HeaderLogin() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-60 flex justify-between items-center p-6 z-50">
      <h1 className="text-white text-3xl font-bold">FLOWCORE</h1>
      <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <Button variant="outline" asChild>
              <Link to="/pedidos">Pedidos</Link>
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Sair
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Register</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}