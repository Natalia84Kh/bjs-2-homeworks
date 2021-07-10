function compareArrays(arr1, arr2) {
 
  return every(item, arr1) === every(item, arr2); // boolean  
};

function advancedFilter(arr) {

  return arr.filter((item) => (item > 0) && (item % 3 === 0)).map((item) => item * 10);

}
