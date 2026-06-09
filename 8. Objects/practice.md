# Practice Exercises – Objects in JavaScript

## Exercise 1: Create Your First Object

### Difficulty

🟢 Junior

### Task

Create an object representing yourself.

### Properties

- name
- age
- country
- favoriteLanguage

### Example

```js
const user = {
  name: "Mariam",
  age: 25,
  country: "Georgia",
  favoriteLanguage: "JavaScript",
};
```

Display the entire object.

---

## Exercise 2: Access Object Properties

### Difficulty

🟢 Junior

### Task

Using the object from Exercise 1, display:

- name
- age

### Requirements

Use:

1. Dot notation
2. Bracket notation

### Goal

Practice accessing object properties.

---

## Exercise 3: Add New Properties

### Difficulty

🟢 Junior

### Task

Create an object:

```js
const car = {
  brand: "Toyota",
};
```

Add:

- model
- year
- color

Display the updated object.

---

## Exercise 4: Update Object Properties

### Difficulty

🟢 Junior

### Task

Change existing values in an object.

### Example

```js
user.age = 30;
```

Display the updated object.

---

## Exercise 5: Delete Object Properties

### Difficulty

🟢 Junior

### Task

Remove one property from an object.

### Example

```js
delete user.country;
```

Display the result.

---

## Exercise 6: Loop Through an Object

### Difficulty

🟢 Junior

### Task

Use a `for...in` loop to display all keys.

### Example Output

```text
name
age
country
```

---

## Exercise 7: Display Keys and Values

### Difficulty

🟢 Junior

### Task

Use a `for...in` loop to display:

```text
name: Mariam
age: 25
country: Georgia
```

---

## Exercise 8: Create Your First Object Method

### Difficulty

🟡 Mid-Level

### Task

Create an object with a method.

### Example

```js
const user = {
  name: "Mariam",

  greet() {
    console.log("Hello!");
  },
};
```

Call the method.

### Goal

Understand object methods.

---

## Exercise 9: Object Method with Data

### Difficulty

🟡 Mid-Level

### Task

Create an object method that uses object properties.

### Example Output

```text
Hello, my name is Mariam
```

### Goal

Prepare for learning `this`.

---

## Exercise 10: Understanding `this`

### Difficulty

🟡 Mid-Level

### Task

Create an object:

```js
const user = {
  name: "Mariam",

  introduce() {
    console.log(this.name);
  },
};
```

Execute the method.

### Questions

1. What does `this` refer to?
2. Why does it work?

---

## Exercise 11: The `this` Challenge

### Difficulty

🟡 Mid-Level

### Task

Predict the output before running.

```js
const user = {
  name: "Mariam",

  greet() {
    console.log(this.name);
  },
};

user.greet();
```

### Goal

Build confidence with `this`.

---

## Exercise 12: Destructuring Basics

### Difficulty

🟡 Mid-Level

### Task

Extract values from an object using destructuring.

### Example

```js
const user = {
  name: "Mariam",
  age: 25,
};
```

### Goal

Create variables:

```js
name;
age;
```

without using dot notation.

---

## Exercise 13: Destructuring with Renaming

### Difficulty

🟡 Mid-Level

### Task

Rename destructured variables.

### Example

```js
const user = {
  name: "Mariam",
};
```

Create:

```js
userName;
```

instead of:

```js
name;
```

---

## Exercise 14: Destructuring Function Parameters

### Difficulty

🟡 Mid-Level

### Task

Create a function that receives an object.

Use destructuring directly in the parameter list.

### Example

```js
displayUser({ name, age });
```

### Goal

Practice modern JavaScript syntax.

---

## Exercise 15: Function vs Method

### Difficulty

🟡 Mid-Level

### Task

Create:

1. A regular function
2. An object method

Both should display:

```text
Hello JavaScript
```

### Questions

1. Which one is a function?
2. Which one is a method?

---

## Exercise 16: Build a User Profile Object

### Difficulty

🟡 Mid-Level

### Task

Create an object containing:

- name
- age
- country

Add a method:

```js
displayProfile();
```

### Expected Output

```text
Name: Mariam
Age: 25
Country: Georgia
```

---

## Exercise 17: Shopping Cart Object

### Difficulty

🔴 Senior

### Task

Create an object representing a product.

### Properties

- name
- price
- quantity

### Method

```js
calculateTotal();
```

### Expected Output

```text
150
```

for:

```js
price = 50;
quantity = 3;
```

---

## Exercise 18: Bank Account Object

### Difficulty

🔴 Senior

### Task

Create a bank account object.

### Properties

- owner
- balance

### Methods

- deposit()
- withdraw()
- showBalance()

### Goal

Simulate simple banking operations.

---

## Exercise 19: Library Object System

### Difficulty

🔴 Senior

### Task

Create an object representing a book.

### Properties

- title
- author
- pages

### Method

```js
describe();
```

### Expected Output

```text
The book JavaScript Guide was written by John Doe.
```

---

## Exercise 20: Nested Objects

### Difficulty

🔴 Senior

### Task

Create:

```js
const user = {
  name: "Mariam",

  address: {
    city: "Rustavi",
    country: "Georgia",
  },
};
```

Display:

```text
Rustavi
Georgia
```

---

## Exercise 21: Destructure Nested Objects

### Difficulty

🔴 Senior

### Task

Using the previous object, extract:

```js
city;
country;
```

using destructuring.

---

## Exercise 22: Functions Are Objects

### Difficulty

🔴 Senior

### Task

Create a function:

```js
function greet() {}
```

Add a custom property to the function.

### Example

```js
greet.language = "JavaScript";
```

Display the property.

### Goal

Discover that functions are objects.

---

## Exercise 23: Functions with Custom Methods

### Difficulty

🔴 Senior

### Task

Create a function and attach a custom method to it.

### Example

```js
greet.sayHi = function () {
  console.log("Hi!");
};
```

Execute the method.

---

## Exercise 24: Student Management Object

### Difficulty

🔴 Senior

### Task

Create an object representing a student.

### Properties

- name
- scores

### Methods

- getAverage()
- getHighestScore()

### Goal

Combine arrays and object methods.

---

## Exercise 25: Inventory System

### Difficulty

🔴 Senior

### Task

Create an inventory object.

### Features

- Add item
- Remove item
- Display inventory

### Goal

Practice real-world object design.

---

## Exercise 26: Car Simulator

### Difficulty

🔴 Senior

### Task

Create a car object.

### Properties

- brand
- speed

### Methods

- accelerate()
- brake()

### Goal

Modify object state through methods.

---

## Exercise 27: User Authentication Object

### Difficulty

🔴 Senior

### Task

Create an object with:

- username
- password

### Methods

- login()
- logout()

Display appropriate messages.

---

## Exercise 28: Object Comparison Challenge

### Difficulty

🔴 Senior

### Task

Predict the output.

```js
const user1 = {
  name: "Mariam",
};

const user2 = {
  name: "Mariam",
};

console.log(user1 === user2);
```

### Questions

1. What is the result?
2. Why?

---

## Exercise 29: Object Method Refactoring

### Difficulty

🔴 Senior

### Task

Convert all methods in an object to use modern shorthand syntax.

### Example

Convert:

```js
greet: function() {}
```

into:

```js
greet() {}
```

---

## Exercise 30: Ultimate Object Challenge

### Difficulty

🔴 Senior

### Task

Create a complete user management system.

### Requirements

Object should contain:

- Personal information
- Nested address object
- Array of skills
- Multiple methods

### Methods

- addSkill()
- removeSkill()
- displayProfile()
- getSkillCount()

### Goal

Combine everything learned in this chapter:

- Properties
- Methods
- `this`
- Destructuring
- Nested Objects
- Functions as Objects
