import { Livro } from "../model/Livro";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroService{

    livroRepository: LivroRepository = new LivroRepository();

    async cadastrarLivro(livroData: any): Promise<Livro> {
        const { title, author, publishedDate, isbn, pages, language, publisher } = livroData;
        console.log(title, author, publishedDate, isbn, pages, language, publisher);
        if(!title || !author || !publishedDate || !isbn || !pages || !language || !publisher){
            throw new Error("Informações incompletas");
        }

        const novoLivro =  await this.livroRepository.insereLivro(title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Insere ", novoLivro);
        return novoLivro;
    }

    async filtrarLivro(livroData: any): Promise<Livro> {
        console.log("Dentro do filtrar ", livroData);
        if(!livroData){
            throw new Error("Livro não existe");
        }
        const id = parseInt(livroData, 10);

        const livro =  await this.livroRepository.filtrarLivroByID(id);
        console.log("Service - Filtrar", livro);
        return livro;
    }

    async listarTodosLivros(): Promise<Livro[]> {
        const livro =  await this.livroRepository.filtrarLivros();
        console.log("Service - Filtrar Todos", livro);
        return livro;
    }

    // async atualizarLivro(livroData: any): Promise<Livro> {
    //     const { id, name, price } = livroData;
    //     if(!name || !price || !id ){
    //         throw new Error("Informações incompletas");
    //     }

    //     const livro =  await this.livroRepository.updateLivro(id,name, price);
    //     console.log("Service - Update ", livro);
    //     return livro;
    // }

    // async deletarLivro(livroData: any): Promise<Livro> {
    //     const { id, name, price } = livroData;
        
    //     if(!name || !price || !id ){
    //         throw new Error("Informações incompletas");
    //     }
        
    //     const searchedLivro = await this.livroRepository.filterLivro(livroData.id);

    //     if(searchedLivro == null) {
    //         throw new Error("Livro não existe!");
    //     }

    //     const livro =  await this.livroRepository.deleteLivro(id,name, price);
    //     console.log("Service - Delete ", livro);
    //     return livro;
    // }

}