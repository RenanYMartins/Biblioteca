import { Livro } from "../model/Livro";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroService{

    livroRepository: LivroRepository = new LivroRepository();

    async cadastrarLivro(livroData: any): Promise<Livro> {
        const { title, author, publishedDate, isbn, pages, language, publisher } = livroData;
        console.log("Service: ", title, author, publishedDate, isbn, pages, language, publisher);
        if(!title || !author || !publishedDate || !isbn || !pages || !language || !publisher){
            throw new Error("Informações incompletas");
        }

        const searchedLivro = await this.livroRepository.filtrarLivroByISBN(livroData.isbn);
        console.log("Searched Livro: ", searchedLivro);
        
        if(searchedLivro.length == 0){
            const novoLivro =  await this.livroRepository.insereLivro(title, author, publishedDate, isbn, pages, language, publisher);
            console.log("Service - Insere ", novoLivro);
            return novoLivro;
        }
        else {
            throw new Error("Livro com ISBN já cadastrado");
        }
        
    }

    async filtrarLivro(livroData: any): Promise<Livro[]> {
        console.log("Dentro do filtrar ", livroData);
        if(!livroData){
            throw new Error("Livro não existe");
        }
        const id = parseInt(livroData, 10);

        const livro =  await this.livroRepository.filtrarLivroByID(id);
        console.log("Service - Filtrar", livro);
        return livro;
    }

    async filtrarLivroPorISBN(livroData: any): Promise<Livro[]> {
        console.log("Dentro do filtrar ", livroData);
        if(!livroData){
            throw new Error("Livro não existe");
        }
        const isbn = parseInt(livroData, 10);

        const livro =  await this.livroRepository.filtrarLivroByISBN(isbn);
        console.log("Service - Filtrar ISBN", livro);
        return livro;
    }

    async listarTodosLivros(): Promise<Livro[]> {
        const livro =  await this.livroRepository.filtrarLivros();
        console.log("Service - Filtrar Todos", livro);
        return livro;
    }

    async atualizarLivro(id: number, livroData: any): Promise<Livro> {
        const { title, author, publishedDate, isbn, pages, language, publisher } = livroData;
        if( !title || !author || !publishedDate || !isbn || !pages || !language || !publisher ){
            throw new Error("Informações incompletas");
        }

        const searchedLivro = await this.livroRepository.filtrarLivroByID(id);
        console.log(searchedLivro);

        if(!searchedLivro)
            throw new Error("O livro não existe");

        const livro =  await this.livroRepository.updateLivro(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Update ", livro);
        return livro;
    }

    async deletarLivro(livroData: any): Promise<Livro> {
        const { id, title, author, publishedDate, isbn, pages, language, publisher } = livroData;
        // console.log(title, author, publishedDate, isbn, pages, language, publisher);
        
        if(!id || !title || !author || !publishedDate || !isbn || !pages || !language || !publisher ){
            throw new Error("Informações incompletas");
        }
        
        const searchedLivro = await this.livroRepository.filtrarLivroByID(livroData.id);

        if(searchedLivro == null) {
            throw new Error("Livro não existe!");
        }

        const livro =  await this.livroRepository.deleteLivro(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Delete ", livro);
        return livro;
    }

}