//first-functions//
//Task 1 Greet function

function welcomeMsg(username) {
  return "Welcome " + username;
}

console.log(welcomeMsg("Jane"));

console.log(welcomeMsg("Marc"));

//Task 2 Gross Price function

function calcGrossPrice(netprice, taxrate) {
  return netprice + netprice * taxrate;
}

console.log(calcGrossPrice(20, 0.19));

console.log(calcGrossPrice(40, 0.16));

//Task 3 Add positive function

function addPositive(num1, num2) {
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  return num1 + num2;
}

console.log(addPositive(2, 3));
// result should be 5
console.log(addPositive(3, -5));
// result should be 8
console.log(addPositive(-1, -8));
// result should be 9
