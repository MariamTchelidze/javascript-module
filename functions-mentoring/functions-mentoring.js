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
