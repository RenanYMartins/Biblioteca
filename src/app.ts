import express from 'express';
import { cadastrarLivro, listarTodosLivros, filtrarLivro, atualizarLivro, deletarLivro } from './controller/LivroController';
// import { cadastrarLivro, atualizarLivro, deletarLivro, filtrarLivro, listarTodosLivro } from './controller/LivroController';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api/livro", cadastrarLivro)
app.get("/api/livro", listarTodosLivros)
app.get("/api/livro/:id", filtrarLivro)
app.put("/api/livro/:id", atualizarLivro)
app.delete("/api/livro/:id", deletarLivro)

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));