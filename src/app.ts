import express from 'express';
import { cadastrarLivro } from './controller/LivroController';
// import { cadastrarLivro, atualizarLivro, deletarLivro, filtrarLivro, listarTodosLivro } from './controller/LivroController';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api/livro", cadastrarLivro)
// app.put("/api/livro", atualizarLivro)
// app.delete("/api/livro", deletarLivro)
// app.get("/api/livro", filtrarLivro)
// app.get("/api/livros", listarTodosLivro)

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));