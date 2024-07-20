import { executarComandoSQL } from "../database/mysql";
import { Livro } from "../model/Livro";

export class LivroRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS Biblioteca.Livro (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255),
            author VARCHAR(255),
            publishedDate DATE,
            isbn VARCHAR(20),
            pages INT,
            language VARCHAR(255),
            publisher VARCHAR(255)
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insereLivro(title: string, author: string, publishedDate: Date, isbn: string, pages:number, language: string, publisher: string) :Promise<Livro>{
        const query = "INSERT INTO Biblioteca.Livro (title, author, publishedDate, isbn, pages, language, publisher) VALUES (?, ?, ?, ?, ?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher]);
            console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
            const livro = new Livro(resultado.insertId, title, author, publishedDate, isbn, pages, language, publisher);
            return livro;
        } catch (err) {
            console.error('Erro ao inserir o livro:', err);
            throw err;
        }
    }

    async filtrarLivroByID(id: number) :Promise<Livro[]>{
        const query = "SELECT * FROM Biblioteca.livro where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Produto localizado com sucesso, ID: ', resultado);
            return resultado;
        } catch (err:any) {
            console.error(`Falha ao procurar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filtrarLivroByISBN(isbn: number) :Promise<Livro[]>{
        const query = "SELECT * FROM Biblioteca.livro where isbn = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [isbn]);
            console.log('Produto localizado com sucesso, ISBN: ', resultado);
            return resultado;
        } catch (err:any) {
            console.error(`Falha ao procurar o livro de ISBN ${isbn} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filtrarLivros() :Promise<Livro[]>{
        const query = "SELECT * FROM Biblioteca.livro" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Livro[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os livros gerando o erro: ${err}`);
            throw err;
        }
    }

    async updateLivro(id: number, title: string, author: string, publishedDate: Date, isbn: string, pages:number, language: string, publisher: string) :Promise<Livro>{
        const query = "UPDATE Biblioteca.livro set title = ?, author = ?, publishedDate = ?, isbn = ?, pages = ?, language = ?, publisher = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher, id]);
            console.log('Produto atualizado com sucesso, ID: ', resultado);
            const livro = new Livro(id, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o produto de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteLivro(id: number, title: string, author: string, publishedDate: Date, isbn: string, pages:number, language: string, publisher: string) :Promise<Livro>{
        const query = "DELETE FROM Biblioteca.livro WHERE id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Produto deletado com sucesso, ID: ', resultado);
            const livro = new Livro(id, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o produto de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    

    
}