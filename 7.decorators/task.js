function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];
  return function wrapper (...rest){ 
    let key = rest.join(',');
    let hash = cache.find(item => item.id === key);
    if (hash !== undefined){
      console.log("Из кэша: " + hash.value);
      return "Из кэша: " + hash.value;
    } 
        let result = func.call(this, ...rest);
        // if (cache.length < 5 ) {
        //   cache.push({id : key, value :  result});
        //   console.log ("Записывааем в кэш: " + {key : result});
        // } else if(cache.length === 5) {
        //   cache.splice(0,1);
        //   cache.push({id : key, value :  result});
        //   console.log ("Удаляем и Записывааем в кэш: " + {key : result});
        //   }
        if(cache.length === 5) {
            cache.splice(0,1);
        }
        cache.push({id : key, value :  result});
 
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;     
      
    }
  }


function debounceDecoratorNew(func, ms) {
  // Ваш код
  // let flag = false;
  // return function wrapper () {
  //   if (flag){
  //     return;
  //   }
  //   func.apply(this, args);
  //   flag = true;
  //   setTimeout(() => flag = false, ms);
  // }; 
    let timeout;
    return function wrapper (...args){
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        func.apply(this, args);
      }, ms )
    }
}

function debounceDecorator2(func) {
  // Ваш код
  let flag = false;
  let count = 0;
  function wrapper () {
    if (flag) {
      return;
    }
    func.apply();
    count += 1; 
    wrapper.count = count;
    console.log(wrapper.count);
    flag = true;
    setTimeout(() => flag = false, ms);
  } 
  wrapper.count;
  return wrapper;
}
