"user strick"

class PrintEditionItem {
    
    constructor(name, releaseDate, pagesCount) {
    
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        this.state = 1.5 * 100;
    }

    set state(num) {
        if(num < 0) {
            this._state = 0;
        } else if(num > 100) {
            this._state = 100;
        } else {
            this._state = num;
        }
    }

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";  
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";  
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";  
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";  
    }
}

// Задание 2

class Library {

    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30) {
            this.books = this.books.push(book);
        }
    }

    findBookBy(type, value) {
        if (this.books.find(item => item.type === value)) {
            return item;
        } else {
            return null;
        }
    }
    
    giveBookByName(bookName) {
       if (this.books.indexOf(bookName) >= 0) {
            this.books.splice(this.books.indexOf(bookName));
            return bookName;
        } else {
            return null;
        }
    }
}