'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
 
  let D = b ** 2 - 4 * a * c;
  if (D < 0) {
    return arr;
  } else if (D === 0) {
      let x = - b / (2 * a);
      arr.push(x);
      return arr;
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a); 
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        arr.push(x1, x2);
        return arr;
      }
};

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (parseInt(percent) === NaN) {
    console.log (`'Параметр "percent" содержит неправильное значение "${percent}"'`);
  }
  if (parseInt(contribution) === NaN) {
    console.log (`Параметр "contribution" содержит неправильное значение "${contribution}"`);
  }
  if (parseInt(contribution) === NaN) {
    console.log (`Параметр "amount" содержит неправильное значение "${amount}"`);
  }

  let s =  (amount - contribution);
  let p = (percent / 12);
  let today = new Date();
  let n = (13 - parseInt(today.getMonth())) + parseInt(date.getMonth()) + 1;
  totalAmount = (s * (p + p / (((1 + p) ** n) - 1))); 
    
  return (+totalAmount.toFixed(2));
};