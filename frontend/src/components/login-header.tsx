import { Button } from "@/components/ui/button";

export function HeaderLogin() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-60 flex justify-between items-center p-6 z-50">
      <h1 className="text-white text-3xl font-bold">FLOWCORE</h1>
      <div className="space-x-4">
        <Button variant="outline">Login</Button>
        <Button>Register</Button>
      </div>
    </header>
  );
}
