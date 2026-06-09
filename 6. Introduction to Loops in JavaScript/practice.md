# Practice Exercises – Introduction to Loops in JavaScript

## Exercise 1: Count from 1 to 10

### Difficulty

🟢 Junior

### Task

Use a `for` loop to display numbers from 1 to 10.

### Expected Output

```text
1
2
3
...
10
```

---

## Exercise 2: Count from 10 to 1

### Difficulty

🟢 Junior

### Task

Use a `for` loop to count backwards.

### Expected Output

```text
10
9
8
...
1
```

---

## Exercise 3: Print Even Numbers

### Difficulty

🟢 Junior

### Task

Display all even numbers from 1 to 20.

### Expected Output

```text
2
4
6
...
20
```

---

## Exercise 4: Print Odd Numbers

### Difficulty

🟢 Junior

### Task

Display all odd numbers from 1 to 20.

### Expected Output

```text
1
3
5
...
19
```

---

## Exercise 5: Multiplication Table

### Difficulty

🟢 Junior

### Task

Display the multiplication table for 5.

### Expected Output

```text
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
```

---

## Exercise 6: Sum Numbers from 1 to 100

### Difficulty

🟢 Junior

### Task

Calculate the sum of all numbers from 1 to 100 using a loop.

### Expected Output

```text
5050
```

---

## Exercise 7: Count Characters

### Difficulty

🟢 Junior

### Task

Use a `for...of` loop to count the number of characters in a string.

### Example

```js
const word = "JavaScript";
```

### Expected Output

```text
10
```

---

## Exercise 8: Print Each Character

### Difficulty

🟢 Junior

### Task

Use `for...of` to display each character separately.

### Expected Output

```text
J
a
v
a
S
c
r
i
p
t
```

---

## Exercise 9: Loop Through an Array

### Difficulty

🟢 Junior

### Task

Use `for...of` to display every item.

### Example

```js
const fruits = ["Apple", "Banana", "Orange"];
```

---

## Exercise 10: Array Total

### Difficulty

🟡 Mid-Level

### Task

Calculate the sum of all numbers in an array.

### Example

```js
const numbers = [10, 20, 30, 40];
```

### Expected Output

```text
100
```

---

## Exercise 11: Find the Largest Number

### Difficulty

🟡 Mid-Level

### Task

Find the largest value in an array.

### Example

```js
const numbers = [12, 8, 99, 34, 5];
```

### Expected Output

```text
99
```

---

## Exercise 12: Find the Smallest Number

### Difficulty

🟡 Mid-Level

### Task

Find the smallest value in an array.

---

## Exercise 13: Reverse Counting with While

### Difficulty

🟡 Mid-Level

### Task

Use a `while` loop to count from 20 down to 1.

---

## Exercise 14: Number Guess Simulation

### Difficulty

🟡 Mid-Level

### Task

Use a `while` loop that continues until a variable equals a target value.

### Goal

Simulate a guessing game.

---

## Exercise 15: Do...While Introduction

### Difficulty

🟡 Mid-Level

### Task

Use a `do...while` loop that displays:

```text
Hello World
```

at least once.

### Goal

Understand the difference between `while` and `do...while`.

---

## Exercise 16: Loop Through an Object

### Difficulty

🟡 Mid-Level

### Task

Use `for...in` to display all properties.

### Example

```js
const user = {
  name: "Mariam",
  age: 25,
  country: "Georgia",
};
```

### Expected Output

```text
name
age
country
```

---

## Exercise 17: Display Object Keys and Values

### Difficulty

🟡 Mid-Level

### Task

Using `for...in`, display:

```text
name: Mariam
age: 25
country: Georgia
```

---

## Exercise 18: Count Object Properties

### Difficulty

🟡 Mid-Level

### Task

Count how many properties exist inside an object.

---

## Exercise 19: Pattern Printing

### Difficulty

🟡 Mid-Level

### Task

Use loops to display:

```text
*
**
***
****
*****
```

---

## Exercise 20: Number Pyramid

### Difficulty

🟡 Mid-Level

### Task

Display:

```text
1
12
123
1234
12345
```

---

## Exercise 21: FizzBuzz

### Difficulty

🔴 Senior

### Task

Display numbers from 1 to 100.

Rules:

```text
Multiples of 3 → Fizz
Multiples of 5 → Buzz
Multiples of both → FizzBuzz
```

---

## Exercise 22: Count Vowels

### Difficulty

🔴 Senior

### Task

Count vowels in a string using `for...of`.

### Example

```js
const text = "JavaScript";
```

### Expected Output

```text
3
```

---

## Exercise 23: Build a Password Validator

### Difficulty

🔴 Senior

### Task

Loop through a password and check:

- Contains uppercase letter
- Contains lowercase letter
- Contains number

### Goal

Practice real-world loop usage.

---

## Exercise 24: Nested Loops Table

### Difficulty

🔴 Senior

### Task

Generate a multiplication table from 1 to 10 using nested loops.

### Example

```text
1 x 1 = 1
1 x 2 = 2
...
10 x 10 = 100
```

---

## Exercise 25: Search for a Value

### Difficulty

🔴 Senior

### Task

Check if an array contains a specific value.

### Example

```js
const numbers = [4, 7, 12, 25];
```

Search for:

```js
12;
```

### Expected Output

```text
Found
```

---

## Exercise 26: Remove Duplicates

### Difficulty

🔴 Senior

### Task

Using loops, create a new array without duplicates.

### Example

```js
[1, 2, 2, 3, 4, 4, 5];
```

### Expected Output

```js
[1, 2, 3, 4, 5];
```

---

## Exercise 27: Build a Simple ATM Menu

### Difficulty

🔴 Senior

### Task

Use a `do...while` loop to simulate a menu.

### Options

```text
1. Check Balance
2. Deposit
3. Withdraw
4. Exit
```

### Goal

Practice real-world loop flow.

---

## Exercise 28: Array Statistics

### Difficulty

🔴 Senior

### Task

Using loops, calculate:

- Total
- Average
- Largest Number
- Smallest Number

### Example

```js
const numbers = [10, 20, 30, 40, 50];
```

---

## Exercise 29: Loop Comparison Challenge

### Difficulty

🔴 Senior

### Task

Solve the same problem using:

- for
- while
- do...while

### Problem

Display numbers from 1 to 50.

### Goal

Understand differences between loop types.

---

## Exercise 30: Ultimate Loop Challenge

### Difficulty

🔴 Senior

### Task

Create a program that:

1. Loops through an array of students.
2. Calculates the average score.
3. Finds the highest score.
4. Finds the lowest score.
5. Displays all student names.

### Example

```js
const students = [
  { name: "Mariam", score: 90 },
  { name: "Nika", score: 75 },
  { name: "Ana", score: 95 },
];
```

### Goal

Combine:

- for loops
- for...of loops
- for...in loops
- conditionals
- variables
