function compareArrays(arr1, arr2) {
 
  return arr1.every((item, index, arr) =>  arr.length && index && item ) === arr2.every((item, index, arr) => arr.length && index && item); // boolean  
};

function advancedFilter(arr) {

  return arr.filter((item) => (item > 0) && (item % 3 === 0)).map((item) => item * 10);

}
