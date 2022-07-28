// Método Map ---------
const arrayMap = [1, 2, 3, 4, 5]; 
function callbackMap(element, index, array) {
  return `Número ${element} no index: ${index}, veio desse array: ${array}`;}
  function map(array, callback) {
  let result = []
  for(let i = 0; i < array.length; i++){
    let element = array[i]
    let index = i
    callback = callbackMap(element, index, array)
    result.push(callback)
  }
  return result
}
console.log("callbackMap")
console.table(map(arrayMap, callbackMap));
//Método Filter ---------
const arrayFilter = [1, 2, 3, 4, 5];
function callbackFilter(element, index, array) {
  if (element > 2 && index && array.length > 2) {
    return true;
  }
}
function filter(array, callback){
  let result = []
  for(let i = 0; i < array.length; i++){
    let element = array[i]
    let index = i
    callback = callbackFilter(element, index, array)
    if(callback == true){
      result.push(element)
    }
  }
  return result
}
console.log("callbackFilter")
console.log(filter(arrayFilter, callbackFilter));
//Método Reduce ---------
const arrayReduce = [1, 2, 3, 4, 5]; 
function callbackReduce(acumulator, valorAtual) {
  return acumulator + valorAtual;
}
function reduce(array, callback, initialValue = 0) {
  let acumulator = 0
  let valorAtual = initialValue
  for(let i = 0; i < array.length; i++){
    acumulator += array[i]
    if(i == array.length - 1){
      callback = callbackReduce(acumulator, valorAtual) 
      return callback
    }
  }
}
console.log("callbackReduce")
console.log(reduce(arrayReduce, callbackReduce));
console.log(reduce(arrayReduce, callbackReduce, 50));
