import express from 'express';
import { cadastrarLivro, listarTodosLivros, filtrarLivro } from './controller/LivroController';
// import { cadastrarLivro, atualizarLivro, deletarLivro, filtrarLivro, listarTodosLivro } from './controller/LivroController';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api/livro", cadastrarLivro)
app.get("/api/livro", listarTodosLivros)
app.get("/api/livro/:id", filtrarLivro)
// app.put("/api/livro", atualizarLivro)
// app.delete("/api/livro", deletarLivro)

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));