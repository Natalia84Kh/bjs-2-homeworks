// Задание 1
function getArrayParams (arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = sum / arr.length;
  let i = 0;
  
  while (i < arr.length) {
    sum += arr[i];
    if(arr[i] < min){
      min = arr[i];
      i += 1;
    } else if(arr[i] > max){
        max = arr[i];
        i += 1;
      } 
  } 
  return `{ min: ${min}, max: ${max}, avg: ${avg} }`;
}

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код
  for (let i = 0; i < arr.length; i++ ){
  sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = arrOfArr[0];


  // Ваш кода
  // for ...
  for (let i = 0; i < arrOfArr.length; i++){
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let max = arr[0];
  let min = arr[0];
  
  for (i = 0; i < arr.length; i++) {
    if (arrOfArr[i] > max) {
      max = arrOfArr[i];
      i += 1; 
    } else if (arrOfArr[i] < min) {
        min = arrOfArr[i];
        i += 1;
      }
  }
  return max - min;
}
