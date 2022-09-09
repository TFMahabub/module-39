function sum(a, b, c){
  const allValue = arguments;
  const arr = [...arguments];
  console.log(arr);
  console.log(allValue);
  const result = a + b + c;
  return result;
}

const total = sum(12, 23, 4, 6, 7);
console.log(total);