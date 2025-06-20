# 📊 Flowcore: Plataforma de Gestão de Documentos

Sistema completo para facilitar a recolha, validação e análise de documentos entre clientes e uma equipa técnica.

---

## 🔧 Tecnologias Utilizadas

- **Backend:** Node.js, Express, TypeScript, MongoDB (Mongoose), JWT (autenticação), Cloudinary (upload de ficheiros), Resend (envio de emails)
- **Frontend:** React, TypeScript, Vite, TailwindCSS, React Hook Form, Zod, Axios,Framer Motion
- **Outros:** dotenv, react-hot-toast

---

## 🎯 Funcionalidades Principais

### 👤 Cliente
- **Login:** Autenticação JWT.
- **Upload de Documentos:** Envio de ficheiros PDF e vídeos, com validação de tamanho e tipo.
- **Visualização de Pedidos:** Consulta do estado dos documentos enviados.
- **Notificações:** Recebe alertas sobre erros ou pendências.
- **Cadastro:** Criação de novos clientes (por técnicos).

### 👨‍💼 Técnico/Auditor
- **Dashboard:** Visualização de todos os pedidos/documentos submetidos.
- **Validação:** Aprovação ou rejeição de documentos.
- **Gestão de Clientes:** Cadastro de novos clientes.
- **Controle de Status:** Atualização do status dos documentos.

---

## 🗂️ Estrutura do Projeto

```
project-flowcore/
│
├── backend/
│   ├── src/
│   │   ├── controllers/    # Lógica de negócio (users, documentos, email)
│   │   ├── middleware/     # Autenticação, autorização
│   │   ├── models/         # Modelos Mongoose (User, Document)
│   │   ├── routes/         # Rotas Express (login, register, request)
│   │   ├── types/          # Tipagens TypeScript
│   │   ├── utils/          # Utilitários (cloudinary, senha aleatória)
│   │   └── server.ts       # Inicialização do servidor
│   └── .env.template       # Variáveis de ambiente
│
├── frontend/
│   ├── src/
│   │   ├── api/            # Instância Axios
│   │   ├── components/     # Componentes UI e páginas
│   │   ├── context/        # Contexto de autenticação
│   │   ├── pages/          # Páginas principais (login, dashboard, forms)
│   │   ├── routes/         # Definição de rotas React Router
│   │   ├── services/       # Serviços de API (login, documentos, usuários)
│   │   ├── types/          # Tipagens TypeScript
│   │   └── utils/          # Utilitários
│   ├── public/             # Imagens e assets públicos
│   ├── index.html          # HTML principal
│   └── index.css           # Estilos globais (Tailwind)
│
└── README.md               # Este arquivo
```

---

## 🚀 Como Rodar o Projeto

### 1. Backend

1. Copie `.env.template` para `.env` e preencha as variáveis (MongoDB, JWT, Cloudinary).
2. Instale as dependências:
   ```sh
   cd backend
   npm install
   ```
3. Inicie o servidor:
   ```sh
   npm run dev
   ```
   O backend roda por padrão em `http://localhost:3003`.

### 2. Frontend

1. Instale as dependências:
   ```sh
   cd frontend
   npm install
   ```
2. Inicie o frontend:
   ```sh
   npm run dev
   ```
   O frontend roda por padrão em `http://localhost:5003`.

---

## 🌐 Fluxo de Uso

1. **Login:** Usuários autenticam-se via email e senha.
2. **Envio de Documentos:** Clientes submetem PDFs ou vídeos, que são enviados para o backend e armazenados no Cloudinary.
3. **Validação:** Técnicos acessam o dashboard, visualizam todos os documentos e podem aprovar ou rejeitar cada um.
4. **Cadastro de Clientes:** Técnicos podem cadastrar novos clientes, que recebem senha por email.
5. **Consulta de Pedidos:** Clientes podem ver o status dos seus documentos enviados.

---

## 🔒 Segurança

- Autenticação JWT protegendo rotas sensíveis.
- Autorização por papel (`customer` ou `technical`).
- Upload seguro de arquivos (apenas PDF, limite de tamanho).
- Senhas armazenadas com hash (bcrypt).
- Variáveis sensíveis via `.env`.

---

## 📬 Contato

Dúvidas ou sugestões? Entre em contato com a equipe Flowcore!

---

Feito pelos estudantes da B4F.
