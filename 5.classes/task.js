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
        // if (this.type === null) {
        //     return null;
        // }
        let findedExample = this.books.find(item => item[type] === value);
        if (findedExample !== undefined) {
            return findedExample.name;
        } else {
            return null;
        }
    }
    
    giveBookByName(bookName) {
       if (this.books.indexOf(bookName) >= 0) {
            this.books.splice(this.books.indexOf(bookName), 1);
            return bookName;
        } else {
            return null;
        }
    }
}

// Задание 3
class Student {
    constructor (name) {
        this.name = name;
        this.marks = [];
        this.subjects = [];
    }

    addGrade (subject, mark) {
        if ((mark < 1) || (mark > 5)) {
            return console.log ("Ошибка, оценка должна быть числом от 1 до 5");
        }
        this.marks.push(mark);
        this.subjects.push(subject);

        if ( this[subject] === undefined) {
            this[subject] = {marks : []};
        } else {
            this[subject].marks.push(mark);
        }
    }

    getAverageBySubject (subject) {
        if(this[subject] === undefined) {
            return console.log("Несуществующий предмет");
        }
        let sum = 0;
        for (let grade of this[subject].marks) {
            sum += grade;
        }
        return sum / this[subject].marks.length;
    }

    getAverage() {
        let sum = 0;
        for (let subject of this.subjects) {
          sum += getAverageBySubject(); 
        }
        return sum / this.subjects.length;
      }

    //   getAverage() {
    //     let sum = 0;
    //     for (let mark of this.marks) {
    //       sum += mark;
    //     }
    //     return sum / this.marks.length;
    //   }


      exсlude(reason) {
        delete this.subjects;
        delete this.marks;
        this.excluded = reason;
      }

};