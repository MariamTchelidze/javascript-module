# Practice Exercises – Variables, Data Types, and Operators

## Exercise 1: Create Your First Variables

### Difficulty

🟢 Junior

### Task

Create variables to store the following information:

- Your name
- Your age
- Your favorite programming language

Display all values in the console.

### Example

```js
let name = "Mariam";
```

### Expected Output

```text
Mariam
25
JavaScript
```

---

## Exercise 2: Exploring Data Types

### Difficulty

🟢 Junior

### Task

Create variables using the following data types:

- String
- Number
- Boolean
- Undefined
- Null

Display each value and its type using:

```js
typeof
```

### Expected Output

```text
Hello -> string
25 -> number
true -> boolean
```

---

## Exercise 3: Let, Const, or Var?

### Difficulty

🟢 Junior

### Task

For each scenario, decide whether you should use:

- `let`
- `const`
- `var`

### Scenarios

1. A user's birth date
2. A shopping cart total
3. A website name
4. A game score that changes

### Goal

Understand when variables should or should not be reassigned.

---

## Exercise 4: Simple Calculator

### Difficulty

🟢 Junior

### Task

Create two number variables.

Perform:

- Addition
- Subtraction
- Multiplication
- Division
- Modulus

### Example

```js
let a = 20;
let b = 5;
```

### Expected Output

```text
Addition: 25
Subtraction: 15
Multiplication: 100
Division: 4
Modulus: 0
```

---

## Exercise 5: Personal Information Card

### Difficulty

🟢 Junior

### Task

Store personal information in variables.

Display a sentence using those variables.

### Example Output

```text
My name is Mariam and I am 25 years old.
```

💡 Hint

Use string concatenation or template literals.

---

## Exercise 6: Operator Prediction Challenge

### Difficulty

🟡 Mid-Level

### Task

Predict the output before running the code.

```js
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);
```

### Requirements

Create a table:

| Expression | Prediction | Actual Result |
| ---------- | ---------- | ------------- |

---

## Exercise 7: Assignment Operators Practice

### Difficulty

🟡 Mid-Level

### Task

Start with:

```js
let score = 100;
```

Apply:

```js
+=
-=
*=
/=
```

### Example

```js
score += 50;
```

Display the value after every operation.

### Goal

Understand assignment operators.

---

## Exercise 8: Comparison Operators

### Difficulty

🟡 Mid-Level

### Task

Create two variables.

Test:

```js
==
===
!=
!==
>
<
>=
<=
```

### Example

```js
let a = 10;
let b = "10";
```

### Questions

Which comparisons return `true`?

Which return `false`?

Why?

---

## Exercise 9: Build a Temperature Converter

### Difficulty

🟡 Mid-Level

### Task

Create a Celsius variable.

Convert it to Fahrenheit.

### Formula

```text
F = (C × 9/5) + 32
```

### Example

```js
let celsius = 25;
```

### Expected Output

```text
77°F
```

---

## Exercise 10: Function Basics

### Difficulty

🟡 Mid-Level

### Task

Create a function called:

```js
greet;
```

The function should accept a name and display:

```text
Hello, Mariam!
```

### Example

```js
greet("Mariam");
```

---

## Exercise 11: Area Calculator Function

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

## Exercise 12: Debug the Variables

### Difficulty

🔴 Senior

### Task

Fix the following code.

```js
const age = 25;

age = 30;

console.log(age);
```

### Questions

1. What error occurs?
2. Why does it happen?
3. How can it be fixed?

---

## Exercise 13: Data Type Detective

### Difficulty

🔴 Senior

### Task

Predict every output before running the code.

```js
let value = "20";

console.log(value + 5);

console.log(value - 5);

console.log(value * 2);

console.log(value / 2);
```

### Requirements

Explain why each result occurs.

### Goal

Understand implicit type conversion.

---

## Exercise 14: Build a Mini Calculator Function

### Difficulty

🔴 Senior

### Task

Create a function that accepts:

- First number
- Second number
- Operator

Supported operators:

```text
+
-
*
/
```

### Example

```js
calculate(10, 5, "+");
```

### Expected Output

```text
15
```

### Bonus

Handle invalid operators.

---

## Exercise 15: Variables and Operators Challenge

### Difficulty

🔴 Senior

### Task

Create a small "Shopping Cart Calculator".

### Requirements

Store:

- Product name
- Product price
- Quantity

Calculate:

- Total cost
- Tax (10%)
- Final price

### Example

```js
Product: Keyboard;
Price: 50;
Quantity: 2;
```

### Expected Output

```text
Product: Keyboard
Subtotal: $100
Tax: $10
Final Price: $110
```

### Bonus

Convert all calculations into reusable functions.
