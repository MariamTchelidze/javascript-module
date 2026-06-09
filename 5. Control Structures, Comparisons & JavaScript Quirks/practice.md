# Practice Exercises – Control Structures, Comparisons & JavaScript Quirks

## Exercise 1: Boolean Decision Maker

### Difficulty

🟢 Junior

### Task

Create a variable:

```js
let isLoggedIn = true;
```

Use an `if` statement to display a message.

### Requirements

- If the user is logged in, display:
  ```text
  Welcome back!
  ```
- Otherwise display:
  ```text
  Please log in.
  ```

### Goal

Practice using booleans in conditions.

---

## Exercise 2: Text Comparison

### Difficulty

🟢 Junior

### Task

Create a variable:

```js
let role = "admin";
```

Use an `if` statement to check the role.

### Requirements

- If the role is `"admin"` display:
  ```text
  Full Access Granted
  ```
- Otherwise display:
  ```text
  Limited Access
  ```

### Bonus

Test different capitalization:

```js
"Admin";
"ADMIN";
"admin";
```

### Goal

Understand string comparisons.

---

## Exercise 3: Grade Checker

### Difficulty

🟢 Junior

### Task

Create a variable:

```js
let score = 85;
```

Use `if`, `else if`, and `else`.

### Rules

```text
90+ → A
80+ → B
70+ → C
60+ → D
Below 60 → F
```

### Expected Output

```text
Grade: B
```

---

## Exercise 4: Age Verification

### Difficulty

🟢 Junior

### Task

Create a variable:

```js
let age = 20;
```

### Requirements

Display:

```text
Adult
```

or

```text
Minor
```

depending on the age.

### Goal

Practice basic conditionals.

---

## Exercise 5: AND Operator Challenge

### Difficulty

🟡 Mid-Level

### Task

Create two variables:

```js
let hasTicket = true;
let hasID = true;
```

### Requirements

A user can enter only if:

```js
hasTicket && hasID;
```

is true.

### Expected Output

```text
Entry Allowed
```

or

```text
Entry Denied
```

### Goal

Understand logical AND.

---

## Exercise 6: OR Operator Challenge

### Difficulty

🟡 Mid-Level

### Task

Create variables:

```js
let isAdmin = false;
let isModerator = true;
```

### Requirements

Allow access if either condition is true.

### Goal

Understand logical OR.

---

## Exercise 7: Operator Precedence Investigation

### Difficulty

🟡 Mid-Level

### Task

Predict the output before running.

```js
console.log(true || (false && false));
```

### Then Test

```js
console.log((true || false) && false);
```

### Questions

1. Which expression executes first?
2. Why are the results different?

### Goal

Understand operator precedence.

---

## Exercise 8: Equality Challenge

### Difficulty

🟡 Mid-Level

### Task

Predict every result before running.

```js
console.log(5 == "5");

console.log(5 === "5");

console.log(true == 1);

console.log(true === 1);
```

### Requirements

Create a table:

| Expression | Prediction | Result |
| ---------- | ---------- | ------ |

### Goal

Understand loose and strict equality.

---

## Exercise 9: Ternary Operator Practice

### Difficulty

🟡 Mid-Level

### Task

Rewrite the following using a ternary operator.

```js
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### Goal

Practice shorthand conditionals.

---

## Exercise 10: Negation Practice

### Difficulty

🟡 Mid-Level

### Task

Create a variable:

```js
let isOnline = false;
```

Use the negation operator:

```js
!
```

to determine whether the user is offline.

### Expected Output

```text
User is offline.
```

### Goal

Understand logical negation.

---

## Exercise 11: Coercion vs Conversion

### Difficulty

🔴 Senior

### Task

Predict every result before running.

```js
console.log("10" + 5);

console.log("10" - 5);

console.log(Number("10"));

console.log(Boolean(1));
```

### Questions

1. Which examples use coercion?
2. Which examples use conversion?
3. What is the difference?

### Goal

Understand implicit and explicit type changes.

---

## Exercise 12: Object Equality Investigation

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

1. Why is the result what it is?
2. Are the objects identical?

### Goal

Understand object comparison.

---

## Exercise 13: Array Equality Investigation

### Difficulty

🔴 Senior

### Task

Predict the output.

```js
const arr1 = [1, 2, 3];

const arr2 = [1, 2, 3];

console.log(arr1 === arr2);
```

### Questions

1. Why does JavaScript behave this way?
2. How are arrays stored in memory?

### Goal

Understand reference types.

---

## Exercise 14: Login System Challenge

### Difficulty

🔴 Senior

### Task

Create a simple login checker.

### Variables

```js
let username = "admin";
let password = "12345";
```

### Requirements

Use:

- `if`
- `&&`
- `===`

Display:

```text
Login Successful
```

or

```text
Invalid Credentials
```

### Bonus

Add an account lock condition.

---

## Exercise 15: Ultimate JavaScript Quirks Challenge

### Difficulty

🔴 Senior

### Task

Predict every result before running.

```js
console.log(false == 0);

console.log(false === 0);

console.log("" == 0);

console.log("" === 0);

console.log(null == undefined);

console.log(null === undefined);

console.log([] == false);
```

### Requirements

For each line:

1. Predict the result.
2. Run the code.
3. Explain why it happens.

### Goal

Explore some of JavaScript's most famous quirks.
