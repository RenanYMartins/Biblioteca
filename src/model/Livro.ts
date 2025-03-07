export class Livro {
    id: number;
    title: string;
    author: string;
    publishedDate?: Date;
    isbn: string;
    pages: number;
    language: string;
    publisher: string;

    constructor(id?: number, title?: string, author?: string, publishedDate?: Date, isbn?: string, pages?: number, language?: string, publisher?: string) {
        this.id = id || 0;
        this.title = title || '';
        this.author = author || '';
        this.publishedDate = publishedDate;
        this.isbn = isbn || '';
        this.pages = pages || 0;
        this.language = language || '';
        this.publisher = publisher || '';
    }
}