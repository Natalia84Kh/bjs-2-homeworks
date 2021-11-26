"user strick"
parseCount = (num) => {
    let a = Number.parseInt(num);
    if (Number.isNaN(a)) {
        throw new Error ("Невалидное значение");
    }
    return a;
};

validateCount = (n) => {
    try { 
        return parseCount(n);
    } catch (error) {
        return error;
    }
};

class Triangle {

    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    
    if (((a + b) < c) || ((a + c ) < b) || ((b + c) < a)) {
        throw new Error ("Треугольник с такими сторонами не существует"); 
    }
    }

    getPerimeter () {
       
        return (this.a + this.b + this.c);
    }

    getArea () {

        let hp = this.getPerimeter() / 2;
        let square = Math.sqrt(hp * (hp - this.a) * (hp - this.b) * (hp - this.c));
        return (+square.toFixed(3));
    }
};

function getTriangle (a, b, c) {
    try {
        return new Triangle (a, b, c);
    } catch {
        return { 
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },
            getArea() {
                return "Ошибка! Треугольник не существует";
            }
            };
        
    }
};