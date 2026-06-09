// 1: Function Declaration
/* 
function calculateTotal(price, taxRate = 0.1) {
  let total = price + price * taxRate;
  return total;
}
console.log(calculateTotal(10, 0.3));
*/

// 2: Funtion Expression:

/* 
const calculateTotal = function (price, taxRate = 0.1) {
  let total = price + price * taxRate;
  return total;
};
console.log(calculateTotal(10, 0.3));
*/

//  3: Arrow Function:

/*
const calculateTotal = (price, taxRate = 0.1) => price + price * taxRate;

console.log(calculateTotal(10, 0.3));

*/

// 4:Closure (Nested Function)

/* 
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter();
counter();


*/

// 5: Callback function:

function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

function sum(x, y) {
  return x + y;
}

console.log(calculate(3, 3, sum));
