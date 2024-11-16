class Book{
    title: string;
    author: string;
    year: number;
    constructor(title: string, author: string, year: number){
        this.title=title;
        this.author=author;
        this.year=year;
    }
    getInfo(){
        console.log(`Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}`)
    }
}
class Library{
    books: Book[];
    constructor(books: Book[]=[]){
        this.books=books;
    }
    addBook(book: Book){
        this.books.push(book);
    }
    listBooks(){
        for(const book of this.books){
            book.getInfo();
        }
    }
}
const library=new Library();
const book1=new Book("Преступление и наказание", "Фёдор Михайлович Достоевский", 1866);
const book2=new Book("Война и мир", "Лев Николаевич Толстой", 1869);
library.addBook(book1);
library.addBook(book2);
library.listBooks();
