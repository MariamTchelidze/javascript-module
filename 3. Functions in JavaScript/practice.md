# Practice Exercises – Functions in JavaScript

## Exercise 1: Create Your First Function

### Difficulty

🟢 Junior

### Task

Create a function called:

```js
sayHello();
```

When executed, it should display:

```text
Hello JavaScript!
```

### Example

```js
sayHello();
```

### Expected Output

```text
Hello JavaScript!
```

---

## Exercise 2: Function with Parameters

### Difficulty

🟢 Junior

### Task

Create a function called:

```js
greet(name);
```

The function should display a personalized greeting.

### Example

```js
greet("Mariam");
```

### Expected Output

```text
Hello, Mariam!
```

---

## Exercise 3: Returning Values

### Difficulty

🟢 Junior

### Task

Create a function called:

```js
addNumbers(a, b);
```

The function must return the sum of the two numbers.

### Example

```js
let result = addNumbers(10, 5);

console.log(result);
```

### Expected Output

```text
15
```

💡 Hint

Use the `return` keyword.

---

## Exercise 4: Function vs Console.log

### Difficulty

🟢 Junior

### Task

Create two functions:

```js
showMessage();
getMessage();
```

### Requirements

- `showMessage()` should display a message using `console.log()`
- `getMessage()` should return a message using `return`

### Questions

1. What is the difference between displaying and returning a value?
2. When should you use `return`?

---

## Exercise 5: Build a Rectangle Area Calculator

### Difficulty

🟡 Mid-Level

### Task

Create a function that calculates the area of a rectangle.

### Formula

```text
width × height
```

### Example

```js
calculateArea(5, 10);
```

### Expected Output

```text
50
```

---

## Exercise 6: The Importance of Code Order

### Difficulty

🟡 Mid-Level

### Task

Predict the result before running the code.

```js
greet();

function greet() {
  console.log("Hello");
}
```

### Then Test

```js
greet();

const greet = function () {
  console.log("Hello");
};
```

### Questions

1. Which code works?
2. Which code throws an error?
3. Why?

### Goal

Understand function hoisting.

---

## Exercise 7: Local Scope Practice

### Difficulty

🟡 Mid-Level

### Task

Create a variable inside a function.

```js
function test() {
  let message = "Hello";
}
```

Try to access the variable outside the function.

### Questions

1. What happens?
2. Why?

### Goal

Understand local scope.

---

## Exercise 8: Global Scope Practice

### Difficulty

🟡 Mid-Level

### Task

Create a variable outside any function.

```js
let username = "Mariam";
```

Access it inside multiple functions.

### Example

```js
showUser();
showGreeting();
```

### Goal

Understand global scope.

---

## Exercise 9: Shadowed Variables

### Difficulty

🟡 Mid-Level

### Task

Predict the output.

```js
let username = "Global User";

function displayUser() {
  let username = "Local User";

  console.log(username);
}

displayUser();

console.log(username);
```

### Questions

1. What is displayed first?
2. What is displayed second?
3. Why?

### Goal

Understand variable shadowing.

---

## Exercise 10: Convert Functions to Arrow Functions

### Difficulty

🟡 Mid-Level

### Task

Convert the following functions into arrow functions.

### Example 1

```js
function greet(name) {
  return `Hello ${name}`;
}
```

### Example 2

```js
function multiply(a, b) {
  return a * b;
}
```

### Goal

Practice ES6 syntax.

---

## Exercise 11: Build a Grade Calculator

### Difficulty

🔴 Senior

### Task

Create a function that receives a score.

### Rules

```text
90 - 100 → A
80 - 89 → B
70 - 79 → C
60 - 69 → D
Below 60 → F
```

### Example

```js
getGrade(85);
```

### Expected Output

```text
B
```

---

## Exercise 12: Execute Functions Indirectly

### Difficulty

🔴 Senior

### Task

Store a function inside a variable.

### Example

```js
function greet() {
  console.log("Hello");
}

let sayHi = greet;
```

Execute the function using the variable.

### Example

```js
sayHi();
```

### Questions

1. Why does this work?
2. What is stored inside `sayHi`?

### Goal

Understand indirect function execution.

---

## Exercise 13: Direct vs Indirect Execution Challenge

### Difficulty

🔴 Senior

### Task

Create a function.

Execute it in two different ways.

### Example

```js
greet();
```

and

```js
let fn = greet;

fn();
```

### Questions

1. Which execution is direct?
2. Which execution is indirect?
3. What is the difference?

---

## Exercise 14: Build a Mini Calculator

### Difficulty

🔴 Senior

### Task

Create four functions:

```js
add();
subtract();
multiply();
divide();
```

Each function should return a result.

### Example

```js
add(10, 5);
```

### Expected Output

```text
15
```

### Bonus

Convert all functions into arrow functions.

---

## Exercise 15: Function Challenge – User Profile Generator

### Difficulty

🔴 Senior

### Task

Create a function that accepts:

- Name
- Age
- Country

The function should return a formatted profile.

### Example

```js
createProfile("Mariam", 25, "Georgia");
```

### Expected Output

```text
Name: Mariam
Age: 25
Country: Georgia
```

### Bonus

Rewrite the function as an arrow function using template literals.
