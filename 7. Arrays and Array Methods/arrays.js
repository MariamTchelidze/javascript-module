// task 1:
const foodArr = ["Khinkali", "Pasta", "Sushi", "Burger", "Fried Chicken"];
console.log(foodArr);

// task 2:
const colorArr = ["red", "white", "black", "green", "yellow"];
// access first, last and third element:
console.log(colorArr[0]);
console.log(colorArr[4]);
console.log(colorArr[2]);

// task 3:

const fruitArr = ["Peach", "Apple", "Banana", "Orange", "Strawberry"];
console.log(fruitArr);
// add fruit in the beginning:
fruitArr.unshift("Watermelon");
console.log(fruitArr);
// add fruit at the end of array:
fruitArr.push("Dragon fruit");
console.log(fruitArr);

// task 4:
// fruits in previous  array:
fruitArr.shift();
console.log(fruitArr);
console.log(fruitArr.shift()); //გამოაქვს ის პირველი ელემენტი რომელიც წაშალა
fruitArr.pop();
console.log(fruitArr);
console.log(fruitArr.pop()); //გამოაქვს ის ელემენტი რომელიც ბოლოდან წაშალა

// Task 5:
// array length
const arrayLength = ["el1", "el2", "el3", "el4", "el5", "el6", "el7", "el8", "el9", "el10"];
console.log(arrayLength.length);

// task 6:
const loopArr = ["Dog", "Cat", "Chicken"];

// log each element with for loop:
for (let i = 0; i < loopArr.length; i++) {
  console.log(loopArr[i]);
}

// Task 7: using same array from task 6

//  log each item with for..of loop
const forOfArr = ["This", "is", "for...of", "loop"];
for (const element of forOfArr) {
  console.log(element);
}

for (const fruit of fruitArr) {
  console.log(fruit);
}

fruitArr.map((element, index, array) => {
  console.log(element, index, array);
}); //returns value
colorArr.forEach((element, index, array) => {
  console.log(element, index, array);
});

// task 8:
const numbers = [12, 45, 7, 99, 31];
// numbers.forEach((number) => {
//   console.log(number);
// });
// find the largest number:
const largestNum = Math.max(...numbers);
console.log(largestNum);

// loop
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log(largest);
