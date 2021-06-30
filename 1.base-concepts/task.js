'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
 
  const D = b ** 2 - 4 * a * c;
  if (D === 0) {
    let x = - b / (2 * a);
    arr.push(x);
    return arr;
  } else if (D > 0) {
      let x1 = (-b + Math.sqrt(D)) / (2 * a); 
      let x2 = (-b - Math.sqrt(D)) / (2 * a);
      arr.push(x1, x2);
      return arr;  
    } 
    return arr;
};

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (Number.isNaN(parseInt(percent))) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (Number.isNaN(parseInt(contribution))) {
      return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    } else if (Number.isNaN(parseInt(amount))) {
      return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
      } else {
        let s =  (amount - contribution);
        let p = (percent / 12) / 100;
        let today = new Date();
        let n = (date.getFullYear() - today.getFullYear()) * 12 - (date.getMonth() + today.getMonth());
        totalAmount = (s * (p + p / (((1 + p) ** n) - 1))) * n; 
          
        return (+totalAmount.toFixed(2));
      }    
};