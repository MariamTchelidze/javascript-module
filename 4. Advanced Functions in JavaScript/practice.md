# Practice Exercises – Advanced Functions in JavaScript

## Exercise 1: Parameters vs Arguments

### Difficulty

🟢 Junior

### Task

Create a function called:

```js
introduce(name, age);
```

Call the function with your own values.

### Example

```js
introduce("Mariam", 25);
```

### Questions

1. Which values are the arguments?
2. Which variables are the parameters?

### Expected Output

```text
Hello, my name is Mariam and I am 25 years old.
```

---

## Exercise 2: Create a Function Expression

### Difficulty

🟢 Junior

### Task

Store a function inside a variable.

### Example Structure

```js
const greet = function () {};
```

The function should display:

```text
Welcome to JavaScript!
```

### Goal

Practice creating function expressions.

---

## Exercise 3: Function Declaration vs Function Expression

### Difficulty

🟢 Junior

### Task

Create two functions that do the same thing.

### Requirements

1. One must be a Function Declaration.
2. One must be a Function Expression.

### Example Output

```text
Hello from Function Declaration
Hello from Function Expression
```

### Goal

Understand the syntax difference.

---

## Exercise 4: Anonymous Function Practice

### Difficulty

🟢 Junior

### Task

Create an anonymous function and assign it to a variable.

Execute it afterward.

### Expected Output

```text
I am an anonymous function.
```

💡 Hint

Anonymous functions do not have a function name.

---

## Exercise 5: Convert to Arrow Functions

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
function square(number) {
  return number * number;
}
```

### Goal

Learn basic arrow function syntax.

---

## Exercise 6: Arrow Function Syntax Challenge

### Difficulty

🟡 Mid-Level

### Task

Create the following arrow functions:

1. No parameters
2. One parameter
3. Two parameters
4. Implicit return

### Example

```js
const sayHello = () => "Hello";
```

### Goal

Practice multiple arrow function styles.

---

## Exercise 7: Default Arguments

### Difficulty

🟡 Mid-Level

### Task

Create a function:

```js
greet((name = "Guest"));
```

### Test Cases

```js
greet();

greet("Mariam");
```

### Expected Output

```text
Hello Guest
Hello Mariam
```

### Goal

Understand default parameter values.

---

## Exercise 8: Shopping Cart Total

### Difficulty

🟡 Mid-Level

### Task

Create a function:

```js
calculateTotal(price, (quantity = 1));
```

### Example

```js
calculateTotal(50);
calculateTotal(50, 3);
```

### Expected Output

```text
50
150
```

### Goal

Combine parameters with default values.

---

## Exercise 9: Function Inside a Function

### Difficulty

🟡 Mid-Level

### Task

Create a function called:

```js
createGreeting();
```

Inside it, create another function called:

```js
sayHello();
```

Execute the inner function from the outer function.

### Expected Output

```text
Hello from the inner function!
```

### Goal

Understand nested functions.

---

## Exercise 10: Build a Profile Generator

### Difficulty

🟡 Mid-Level

### Task

Create a function:

```js
createProfile(name, age);
```

Inside it, create another function responsible for formatting the output.

### Example

```js
createProfile("Mariam", 25);
```

### Expected Output

```text
Name: Mariam
Age: 25
```

### Goal

Practice nested functions with real-world data.

---

## Exercise 11: Your First Callback Function

### Difficulty

🔴 Senior

### Task

Create a function:

```js
processUser(callback);
```

The function should execute the callback.

### Example

```js
processUser(function () {
  console.log("User processed");
});
```

### Expected Output

```text
User processed
```

### Goal

Understand callback functions.

---

## Exercise 12: Callback Challenge

### Difficulty

🔴 Senior

### Task

Create a function:

```js
performOperation(a, b, callback);
```

The callback should determine what operation to perform.

### Example

```js
performOperation(10, 5, (a, b) => a + b);
```

### Expected Output

```text
15
```

### Bonus

Test subtraction, multiplication, and division.

---

## Exercise 13: Delayed Callback

### Difficulty

🔴 Senior

### Task

Use:

```js
setTimeout();
```

with an anonymous callback function.

### Example

```js
setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);
```

### Goal

See a real-world callback in action.

---

## Exercise 14: Build a Mini Notification System

### Difficulty

🔴 Senior

### Task

Create a function:

```js
sendNotification(message, callback);
```

### Requirements

1. Display the notification message.
2. Execute the callback afterward.

### Example

```js
sendNotification("Email Sent", () => console.log("Notification logged"));
```

### Expected Output

```text
Email Sent
Notification logged
```

### Goal

Practice callbacks with multiple actions.

---

## Exercise 15: Advanced Function Challenge

### Difficulty

🔴 Senior

### Task

Create a mini calculator using:

- Arrow Functions
- Default Arguments
- Callback Functions

### Requirements

Create a function:

```js
calculate(a, (b = 1), operation);
```

### Example

```js
calculate(10, 5, (a, b) => a + b);

calculate(10, 5, (a, b) => a * b);
```

### Expected Output

```text
15
50
```

### Bonus

Add support for:

- Power
- Modulus
- Percentage

### Goal

Combine everything learned in this chapter into one project.
