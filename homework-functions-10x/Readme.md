Task 1 — Function Declaration with Default Parameter
Create a function called calculateTotal.
Parameters:
• price — the price of the item
• taxRate — the tax percentage (default value: 0.1)
The function must return the final price including tax.
Formula: price + (price \* taxRate)
Task 2 — Function Expression
Take the calculateTotal function from Task 1 and store it inside a variable instead.
The function should work exactly the same way — only the syntax changes.
Task 3 — Arrow Function
Rewrite calculateTotal one more time, now using arrow function syntax.
The result must still be the same as Task 1 and Task 2.
Task 4 — Closure (Nested Function)
Create a function called createCounter.
How it works:

1. createCounter holds a variable called count, starting at 0
2. It returns another function — not a number
3. Every time you call that returned function, it increases count by 1 and returns the
   new value
   Hint: The count variable lives inside createCounter. The inner function can still access
   it — this is called a closure.
   Task 5 — Callback Function
   Create a function called calculate.
   Parameters:
   • num1 — first number
   • num2 — second number
   • operation — a function that takes two numbers and returns a result
   How it works:
4. calculate receives two numbers and an operation function
5. It passes both numbers into the operation function
6. It returns whatever the operation function returns
   Hint: Your calculate function does not do any math itself — it just hands the two
   numbers over to the operation function and returns the result.
