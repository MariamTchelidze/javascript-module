// // let age = 15;
// // if (age >= 18) {
// //   console.log("სრულწლოვანია");
// // } else {
// //   console.log("არ არის სრულწლოვანი");
// // }

// // // 2:
// // const user = {
// //   name: "Goga",
// //   age: 25,
// //   role: "Admin",
// // };

// // // 3:

// // let playerName = "Kvaratskhelia";
// // console.log(playerName);

// // // 4:
// // const numbers = [1, 2, 3];
// // numbers.push(4);
// // console.log(numbers);

// // // 5:
// // // let count = 5;
// // // while (count > 0) {
// // //     count--;
// // //     console.log(count);

// // // }

// // // 6;
// // const getUser = (name) => ({
// //   name: name,
// //   role: "User",
// // });
// // console.log(getUser("Nino"));

// // // 7:
// // const fruits = ["Apple", "Banana", "Cherry"];
// // for (let i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i]);
// // }

// // // 8:

// // function sumArray(arr) {
// //   let sum = 0;
// //   for (let num of arr) {
// //     sum += num;
// //   }
// //   return sum;
// // }
// // console.log(sumArray([10, 20, 30]));

// // // 9:
// // // const person = {
// // //   name: "Luka",
// // //   greet: function () {
// // //     // console.log("greet", this);
// // //     setTimeout(() => {
// // //       console.log("Hello, " + this.name);
// // //     }, 1000);
// // //   },
// // // };
// // // person.greet();

// // // 10:
// // const nums = [1, 2, 3];
// // const doubled = nums.map((n) => n * 2);
// // console.log(doubled);

// // // 11:
// // const data = [1, 2, 3, 4, 5];
// // for (let num of data) {
// //   if (num === 3) {
// //     break;
// //   }
// //   console.log(num);
// // }

// // 12:
// const items = [1, 2, 3, 4, 5];
// // let newItems;
// for (let i = 0; i < items.length; i++) {
//   if (items[i] % 2 === 0) {
//     items.splice(i, 1);
//   }
// }
// console.log(items);

// // 13:
// function getBalance(balance) {
//   const finalBalance = balance ?? 100;
//   return finalBalance;
// }
// console.log(getBalance(0));
// //0 არის falsy da მაგიტო აბრუნებს || ამის მაგივრად ვიყენებთ ??

// //14:
// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json(); // await უნდა აუცილებლად
//   console.log(data);
// }
// fetchData();

// // 15:
// fetch("https://invalid-url.com/data")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.massage));

// // 16:
// const title = document.querySelector("#non-existent-id");
// title.style.color = "red";

// // არ არსებობს და მაგიტო აგდებს ჯერ უნდა შეიქმნას ჯერ  ან აქ შექმნი ან  html

// //17:
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// 18:
let result;
try {
  result = "Success";
  console.log(result);
} catch (e) {
  console.log("Error");
} finally {
  console.log("Process finished with: " + result);
}

// 19:
function validateAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  return true;
}
try {
  validateAge(-5);
} catch (e) {
  console.log("Caught:", e.message);
}

// 20:
const user = { name: "Giorgi", role: "Viewer" }; //heap memory
const admin = { ...user }; // spread operator
admin.role = "Admin";
console.log(user.role); // იბეჭდება "Admin"
console.log(admin.role);

//
// Checking if  everything is ready

// new checks  done for  the program