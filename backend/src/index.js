import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { PrismaClient } from './generated/prisma/index.js';
import authRoutes from "./routes/auth.js";
import Routes from "./routes/user.js";
import { authenticateToken } from "./middleware/auth.js";

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: function (origin, callback) {
    const allowed = ["http://localhost:5173", "http://192.167.18.143:", "http://192.167.18.143:4000"];

    if (!origin) return callback(null, true);

    if (allowed.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      logger.warn("CORS blocked request", { origin });
      callback(new Error("Não permitido pelo CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "X-Correlation-ID",
    "Accept",
    "Origin",
  ],
  exposedHeaders: ["X-Correlation-ID"],
  maxAge: 86400,
};

app.use(cors(corsOptions));

app.use(express.json());

// Rotas de autenticação
app.use("/auth", authRoutes);

// Rotas para editar usuário e adicionar/remover favoritos
app.use("/", Routes);

// Teste de servidor
app.get("/", (req, res) => {
  res.send("Servidor rodando");
});

// Rota protegida - pegar dados do usuário logado
app.get("/me", authenticateToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: { id: true, name: true, email: true, role: true, createdAt: true }
    });

    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
