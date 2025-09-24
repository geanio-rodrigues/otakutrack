import { Router } from "express";
import { PrismaClient } from '../generated/prisma/index.js';

const router = Router();
const prisma = new PrismaClient();

// Editar usuário
router.put("/user", async (req, res) => {
  const {id, name} = req.body;

  if(!name) return res.status(400).json({ error: "Informe o nome de usuário" });
  
  const existing = await prisma.user.findUnique({ where: { id } });
  if (!existing) return res.status(404).json({ error: "Usuário não encontrado!" });

  try {
    const user = await prisma.user.update({
        where: { id },
        data: { name },
        select: { id: true, name: true }
    });
    res.status(201).json({ message: "Usuário atualizado com sucesso", user });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
})

// Adicionar Favorito

// Remover Favorito

export default router;