// Задание 1
function getArrayParams (arr) {
  let sum = 0;
  const result = {
    min : 101,
    max : -101,
    avg : 0,
  };

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
    if(arr[i] < result.min){
      result.min = arr[i];
    } 
    if(arr[i] > result.max){
        result.max = arr[i];
    } 
  } 
  result.avg = (sum / arr.length).toFixed(2);
  return result;
  
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
  let max = -Infinity;

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
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; 
    } 
    if (arr[i] < min) {
        min = arr[i];
    }
  }
  return max - min;
}
