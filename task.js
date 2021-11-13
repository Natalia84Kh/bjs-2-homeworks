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

    getPerimeter (a, b, c) {
        if (((a + b) < c) || ((a + c ) < b) || ((b + c) < a)) {
            console.log ('Ошибка! Треугольник не существует')
        }
        return (a + b + c);
    }

    getArea (a, b, c) {
        if (((a + b) < c) || ((a + c ) < b) || ((b + c) < a)) {
            console.log ('Ошибка! Треугольник не существует')
        }
        let hp = (this.getPerimeter(a, b, c)) / 2;
        let square = Math.sqrt(hp * (hp - a) * (hp - b) * (hp - c));
        return square.toFixed(3);
    }
};

function getTriangle (a, b, c) {
    try {
        return new Triangle (a, b, c);
    } catch {
        return { 
            getPerimeter(a, b, c) {
                return "Ошибка! Треугольник не существует";
            },
            getArea(a, b, c) {
                return "Ошибка! Треугольник не существует";
            }
            };
        
    }
};