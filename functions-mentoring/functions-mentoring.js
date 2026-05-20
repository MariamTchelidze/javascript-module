// Task 1: Function Declaration vs Expression

function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(2, 9));

// Task 2: Arrow Functions
const addNumbersArr = (a, b) => a + b;
console.log(addNumbersArr(3, 3));

// Task 3: Parameters and Arguments

function introduce(firstName, profession) {
  console.log("Hello, my name is " + firstName + "and I am a " + profession);
}

introduce("Mariami", "Student");

// Task 4: Function Destructuring
const displayCarDetails = ({ brand, model, year }) => {
  console.log(`Brand: ${brand}`);
  console.log(`Model: ${model}`);
  console.log(`Year: ${year}`);
};
displayCarDetails({
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
});

// Task 5: Returning Values vs Logging
function calculateDiscount(price, discountPercentage) {
  return price - (price * discountPercentage) / 100;
}
console.log(calculateDiscount(30, 10));

// Task 6: Hoisting

console.log(sayGoodbye());

function sayGoodbye() {
  return "Goodbye my lover, Goodbye my friend... tananananaaa";
}
sayGoodbye();

// Task 7: Global and Local Scope
let secretCode = "XYZ123";
function testScope() {
  let localPin = "9999";
  console.log(secretCode);
  console.log(localPin);
}
testScope();
/*
გარეთ რომ გამოვიტანე, რეფერენს ერორი დამიწერა, 
რადგან  ფუნქციის შიგნით დეკლარირებული ცვლადის სკოუპი დაირღვა
*/

// Task 8: Shadowed Variables
let playerScore = 10;
function updateScore() {
  let playerScore = 50;
  console.log(playerScore);
}
console.log(playerScore);

// Task 9: Executing Functions Indirectly (Callbacks)

function alertUser() {
  console.log("Action completed!");
}
function executeCallback(callBack) {
  callBack();
}
executeCallback(alertUser);

// Task 10: Indirect vs. Direct Execution with setTimeout
function timeIsUp() {
  console.log("Time is Up!");
}
setTimeout(timeIsUp, 3000);
// თუ ფრჩხილებით დავწერთ timeisUp-ს, ფუნქცია აღარ უყურებს დილეი დროს და პირდაპირ ეშვება
