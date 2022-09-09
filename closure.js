function kitchen(){
  let rost = 0;
  return function(){
    rost++
    return rost;
  }
}

const result = kitchen();
console.log(result())
console.log(result())
console.log(result())
console.log(result())
console.log(result())
console.log(result())
console.log(result())
console.log(result())