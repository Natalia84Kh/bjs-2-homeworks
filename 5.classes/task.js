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
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let findedExample = this.books.find(item => item[type] === value);
        if (findedExample !== undefined) {
            return findedExample;
        } else {
            return null;
        }
    }
    
    giveBookByName(bookName) {
        let fb = this.books.find(item => item.name === bookName)
        if (fb !== undefined) {
          let fbIndex = this.books.indexOf(fb);
          this.books.splice(fbIndex, 1);
          return fb;
        } 
        return null;
    }    
        

}


// Задание 3
class Student {
    constructor (name) {
        this.name = name;
        this.marks = {};
    }

    addGrade (mark, subject) {
        if ((mark < 1) || (mark > 5)) {
            return console.log ("Ошибка, оценка должна быть числом от 1 до 5");
        }
        if ( this.marks.hasOwnProperty(subject) === false) {
            this.marks[subject] = [mark];
        } else {
            this.marks[subject].push(mark);
        }
    }

    getAverageBySubject (subject) {
        if ( this.marks.hasOwnProperty(subject) === false) {
            return console.log("Несуществующий предмет");
        }
        let sum = 0;
        for (let mark of this.marks[subject]) {
            sum += mark;
        }
        return sum / this.marks[subject].length;
    }

    getAverage() {
        let sum = 0;
        for (const key of Object.keys(this.marks)) {
          sum += getAverageBySubject(key); 
        }
        return sum / Object.keys(this.marks).length;
      }

      exсlude(reason) {
        delete this.subjects;
        delete this.marks;
        this.excluded = reason;
      }

};