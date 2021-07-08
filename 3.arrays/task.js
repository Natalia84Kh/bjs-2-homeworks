function compareArrays(arr1, arr2) {
  let result = arr1.every(isEqual);
  
  function isEqual (arr1, arr2) {
    for (let i = 0, let j = 0; i < arr1.length, j < arr2.length; i++,  j++) {
      return arr1[i] === arr2[j];
    }
  }  
  return result; // boolean  
};

function advancedFilter(arr) {

  const arr1 = arr.filter((item) => item > 0);
  const arr2 = arr1.filter((item) => item % 3 === 0);
  const resultAr = arr2.map((item) => item * 10);

  return resultArr; // array
}
