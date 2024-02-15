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

function addPositive1(firstnumber, secondnumber) {
  return firstnumber + secondnumber;
}

console.log(addPositive1(2, 3));

//Task

function addPositive2(firstnumber, secondnumber) {
  return firstnumber + secondnumber * -1;
}

console.log(addPositive2(3, -5));
// result2 should be 8

function addPositive3(firstnumber, secondnumber) {
  return firstnumber * -1 + secondnumber * -1;
}
console.log(addPositive3(-1, -8));
// result2 should be 9
