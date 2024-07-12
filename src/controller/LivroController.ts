import { Request, Response } from "express";
import { ProductService } from "../service/ProductService";

const productService = new ProductService();

export async function cadastrarLivro (req: Request, res: Response){
    try {
        const novoLivro = await productService.cadastrarLivro(req.body);
        res.status(201).json(
            {
                mensagem:"Livro adicionado com sucesso!",
                livro:novoLivro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

// export async function atualizarLivro (req: Request, res: Response){
//     try {
//         const livro = await productService.atualizarLivro(req.body);
//         res.status(200).json(
//             {
//                 mensagem:"Livro atualizado com sucesso!",
//                 livro:livro
//             }
//         );
//     } catch (error: any) {
//         res.status(400).json({ message: error.message});
//     }
// };

// export async function deletarLivro (req: Request, res: Response){
//     try {
//         const livro = await productService.deletarLivro(req.body);
//         res.status(200).json(
//             {
//                 mensagem:"Livro deletado com sucesso!",
//                 livro:livro
//             }
//         );
//     } catch (error: any) {
//         res.status(400).json({ message: error.message});
//     }
// };

// export async function filtrarLivro (req: Request, res: Response){
//     try {
//         const livro = await productService.filtrarLivro(req.query.id);
//         res.status(200).json(
//             {
//                 mensagem:"Livro encontrado com sucesso!",
//                 livro:livro
//             }
//         );
//     } catch (error: any) {
//         res.status(400).json({ message: error.message});
//     }
// };

// export async function listarTodosLivros (req: Request, res: Response){
//     try {
//         const livros = await productService.listarTodosLivros();
//         res.status(200).json(
//             {
//                 mensagem:"Livros listados com sucesso!",
//                 livros:livros
//             }
//             );
//     } catch (error: any) {
//         res.status(400).json({ message: error.message});
//     }
// };