function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];
  return function wrapper (...rest){ 
    let key = [rest].join(',');
    let hash = cache.find(item => item.id === key);
    if (hash !== undefined){
      console.log("Из кэша: " + hash.value);
      return "Из кэша: " + hash.value;
    } else {
        let result = func.call(this, ...rest);
        if (cache.length < 5 ) {
          cache.push({id : key, value :  result});
          console.log ("Записывааем в кэш: " + {key : result});
        } else if(cache.length === 5) {
          cache.splice(0,1);
          cache.push({id : key, value :  result});
          console.log ("Удаляем и Записывааем в кэш: " + {key : result});
          }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;     
      }
    }
  }


function debounceDecoratorNew(func) {
  // Ваш код
  let flag = false;
  return function wrapper () {
    if (flag) return;
    func.apply(this, args);
    flag = true;
    setTimeout(() => flag = false, ms);
  }; 
}

function debounceDecorator2(func) {
  // Ваш код
  let flag = false;
  let count = 0;
  function wrapper () {
    if (flag) return;
    func.apply();
    count += 1; 
    wrapper.cache.splice(0,1, count);
    console.log(wrapper.cache);
    flag = true;
    setTimeout(() => flag = false, ms);
  } 
  wrapper.cache = [];
  return wrapper;
}
