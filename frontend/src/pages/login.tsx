import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { login } from "@/services/login";
import toast, { Toaster } from 'react-hot-toast'

const loginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Senha mínima de 6 caracteres" }),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(user: z.infer<typeof loginSchema>) {
    try {
      const response = await login({
        data: { email: user.email, password: user.password },
      })
      if (response.status === 200) {
        toast.success('Login feito com sucesso!',{id:"1"})
        window.location.href = '/'
      } else {
       // console.log("não conseguiu fazer login")
        toast.error("Email ou Password incorrectos",{id:"1"})
      }
    } catch (error) {
      console.error(error)
      toast.error('Error logging in. Please try again later.', {
        id: '1',
      })
    }
  }
   const navigate = useNavigate();

  return (
    <>
      <div className="bg-opacity-50 flex justify-between items-center p-6">
        <h1 className="text-black text-3xl font-bold">FLOWCORE</h1>
        <div>
          <Button onClick={() => navigate("/")}>Voltar</Button>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="flex flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full">
          {/* Imagem lateral */}
          <div className="hidden md:flex items-center justify-center w-1/2 bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIAsJ9bnFzQEcBWP0vNs9XIMpMckv4wEumIy4M6iJURonWA87QnFqeUdymktONf2y25Ck&usqp=CAU" // coloque o caminho da sua imagem aqui
              alt="Login visual"
              className="object-cover h-full w-full"
            />
          </div>
          {/* Card de login */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Card className="w-full max-w-md shadow-none border-none">
              <CardContent className="p-6">
                <h1 className="text-2xl font-semibold mb-6 text-center">
                  Entrar
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" {...register("email")} />
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      {...register("password")}
                    />
                    {errors.password && (
                      <p className="text-sm text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <a href="#" className="text-blue-600 hover:underline">
                      Esqueceu a senha?
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                      Ajuda
                    </a>
                  </div>
                  <Toaster />
                  <Button className="w-full">Entrar</Button>
                </form>
                <p className="text-xs text-center mt-4">
                  By signing in, I agree to the{" "}
                  <a href="#" className="underline">
                    Política de Privacidade
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline">
                    Termos e Condições de Uso
                  </a>
                  .
                </p>
                <div className="flex items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
                  <div className="h-px bg-gray-300 w-1/3"></div>
                  <span>Aceda também com:</span>
                  <div className="h-px bg-gray-300 w-1/3"></div>
                </div>
                <div className="flex justify-between mt-4">
                  <Button
                    variant="outline"
                    className="w-1/4 flex justify-center"
                  >
                    <LuSearch />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-1/4 flex justify-center"
                  >
                    <FaApple />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-1/4 flex justify-center"
                  >
                    <FaGoogle />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-1/4 flex justify-center"
                  >
                    <FaFacebook />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <footer className="w-full flex justify-center bg-gray-800 text-white py-8 px-6 md:grid-cols-2 gap-6">
        <div>
          <p>@2025 Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
};
