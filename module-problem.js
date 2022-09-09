// 2-------------------------------------------
// let storeFalsyValue = true;

// if(!storeFalsyValue){
//   console.log('Nothing to show');
// }
// else{
//   console.log('You are amazing');
// }

// 3-----------------------------------------------
function add(a, b){
  return a+b;
}
function subtract(a, b){
  return a-b;
}
function multiply(a,b){
  return a*b;
}
function divide(a,b){
  return a/b;
}
function modulus(a,b){
  return a%b;
}

const getResult = (para1, para2, callFunction) =>{
  const result = callFunction(para1,para2);
  console.log(result);
}

getResult(60, 30, divide)