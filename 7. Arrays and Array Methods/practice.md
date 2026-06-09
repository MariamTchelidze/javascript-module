# Practice Exercises – Arrays and Array Methods

## Exercise 1: Create Your First Array

### Difficulty

🟢 Junior

### Task

Create an array containing 5 of your favorite foods.

Display the entire array.

### Example

```js
const foods = ["Pizza", "Burger", "Pasta", "Sushi", "Tacos"];
```

---

## Exercise 2: Access Array Elements

### Difficulty

🟢 Junior

### Task

Create an array of 5 colors.

Display:

- First item
- Last item
- Third item

### Goal

Practice array indexing.

---

## Exercise 3: Add Elements

### Difficulty

🟢 Junior

### Task

Create an array of fruits.

Add:

- One fruit to the end
- One fruit to the beginning

### Goal

Practice array modification.

---

## Exercise 4: Remove Elements

### Difficulty

🟢 Junior

### Task

Remove:

- First element
- Last element

from an array.

Display the updated array.

---

## Exercise 5: Array Length

### Difficulty

🟢 Junior

### Task

Create an array with 10 items.

Display its length.

### Expected Output

```text
10
```

---

## Exercise 6: Loop Through an Array

### Difficulty

🟢 Junior

### Task

Use a `for` loop to display all elements.

### Example

```js
const animals = ["Dog", "Cat", "Bird"];
```

---

## Exercise 7: Loop with for...of

### Difficulty

🟢 Junior

### Task

Display every item using `for...of`.

### Goal

Compare with a traditional `for` loop.

---

## Exercise 8: Find the Largest Number

### Difficulty

🟡 Mid-Level

### Task

Find the largest number in an array.

### Example

```js
const numbers = [12, 45, 7, 99, 31];
```

### Expected Output

```text
99
```

---

## Exercise 9: Find the Smallest Number

### Difficulty

🟡 Mid-Level

### Task

Find the smallest value in an array.

---

## Exercise 10: Sum All Numbers

### Difficulty

🟡 Mid-Level

### Task

Calculate the total of all numbers using a loop.

### Example

```js
[10, 20, 30, 40];
```

### Expected Output

```text
100
```

---

## Exercise 11: Double Every Number with map()

### Difficulty

🟡 Mid-Level

### Task

Use `map()` to create a new array.

### Example

```js
[1, 2, 3, 4];
```

### Expected Output

```js
[2, 4, 6, 8];
```

---

## Exercise 12: Convert Names to Uppercase

### Difficulty

🟡 Mid-Level

### Task

Use `map()` to convert all names to uppercase.

### Example

```js
["mariam", "ana", "nika"];
```

### Expected Output

```js
["MARIAM", "ANA", "NIKA"];
```

---

## Exercise 13: Extract Object Properties

### Difficulty

🟡 Mid-Level

### Task

Use `map()` to create an array containing only names.

### Example

```js
[{ name: "Mariam" }, { name: "Ana" }, { name: "Nika" }];
```

### Expected Output

```js
["Mariam", "Ana", "Nika"];
```

---

## Exercise 14: Filter Even Numbers

### Difficulty

🟡 Mid-Level

### Task

Use `filter()` to keep only even numbers.

### Example

```js
[1, 2, 3, 4, 5, 6];
```

### Expected Output

```js
[2, 4, 6];
```

---

## Exercise 15: Filter Long Words

### Difficulty

🟡 Mid-Level

### Task

Keep only words longer than 5 characters.

---

## Exercise 16: Filter Adults

### Difficulty

🟡 Mid-Level

### Task

Filter users who are 18 or older.

### Example

```js
[
  { name: "Ana", age: 16 },
  { name: "Nika", age: 22 },
];
```

---

## Exercise 17: Calculate Total with reduce()

### Difficulty

🟡 Mid-Level

### Task

Use `reduce()` to calculate the total.

### Example

```js
[10, 20, 30, 40];
```

### Expected Output

```text
100
```

---

## Exercise 18: Find Maximum with reduce()

### Difficulty

🟡 Mid-Level

### Task

Use `reduce()` to find the largest number.

---

## Exercise 19: Count Total Characters

### Difficulty

🟡 Mid-Level

### Task

Use `reduce()` to calculate the total number of characters.

### Example

```js
["Java", "Script"];
```

### Expected Output

```text
10
```

---

## Exercise 20: Find a Product

### Difficulty

🟡 Mid-Level

### Task

Use `find()` to locate a product.

### Example

```js
[
  { id: 1, name: "Keyboard" },
  { id: 2, name: "Mouse" },
];
```

Find:

```js
id === 2;
```

---

## Exercise 21: Find an Index

### Difficulty

🟡 Mid-Level

### Task

Use `findIndex()` to find the position of a value.

---

## Exercise 22: Sort Numbers Ascending

### Difficulty

🔴 Senior

### Task

Sort numbers from smallest to largest.

### Example

```js
[7, 2, 9, 1, 5];
```

### Expected Output

```js
[1, 2, 5, 7, 9];
```

---

## Exercise 23: Sort Numbers Descending

### Difficulty

🔴 Senior

### Task

Sort numbers from largest to smallest.

---

## Exercise 24: Sort Users by Age

### Difficulty

🔴 Senior

### Task

Sort an array of users by age.

---

## Exercise 25: Reverse an Array

### Difficulty

🔴 Senior

### Task

Reverse an array using `reverse()`.

### Example

```js
[1, 2, 3, 4];
```

### Expected Output

```js
[4, 3, 2, 1];
```

---

## Exercise 26: Slice an Array

### Difficulty

🔴 Senior

### Task

Extract only the middle three elements using `slice()`.

### Example

```js
[1, 2, 3, 4, 5, 6, 7];
```

### Expected Output

```js
[3, 4, 5];
```

---

## Exercise 27: Modify with splice()

### Difficulty

🔴 Senior

### Task

Remove two items and insert two new items.

### Goal

Understand array mutation.

---

## Exercise 28: Shopping Cart System

### Difficulty

🔴 Senior

### Task

Create an array of products.

Calculate:

- Total items
- Total price
- Most expensive product

### Goal

Combine loops and array methods.

---

## Exercise 29: Student Grade Analyzer

### Difficulty

🔴 Senior

### Task

Using an array of students:

- Find highest grade
- Find lowest grade
- Calculate average grade
- Filter passing students

---

## Exercise 30: Ultimate Array Challenge

### Difficulty

🔴 Senior

### Task

Given:

```js
const users = [
  { name: "Ana", age: 17 },
  { name: "Nika", age: 25 },
  { name: "Mariam", age: 21 },
];
```

Complete all tasks:

1. Extract names using `map()`
2. Filter adults using `filter()`
3. Count users using `reduce()`
4. Find Mariam using `find()`
5. Sort by age
6. Reverse the sorted array

### Goal

Combine all array methods in a single exercise.
