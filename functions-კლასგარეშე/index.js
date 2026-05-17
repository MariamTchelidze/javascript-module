function calculateFinalScore(basePoints, bonusPoints, penalty) {
  basePoints = basePoints || 0;
  bonusPoints = bonusPoints || 0;
  penalty = penalty || 0;

  console.log(arguments);

  let finalScore = basePoints + bonusPoints - penalty;
  return finalScore;
}
console.log(calculateFinalScore(23, undefined, 3));

// 2:
// function greetUser(name = "Guest") {
//   return "გამარჯობა " + name;
// }
// console.log(greetUser("მარიამ"));

const greetUser = (name = "Guest") => "გამარჯობა " + name;
console.log(greetUser("მარიამ"));

// 3:
function calculateAre(length, width = length) {
  return length * width;
}
console.log(calculateAre(4, 5));

// 4:
// function calculateInterest(amount, rate = 5) {
//   return (amount * rate) / 100;
// }
const calculateInterest = (amount, rate = 5) => (amount * rate) / 100;
console.log(calculateInterest(10, 10));
