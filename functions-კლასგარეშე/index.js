// Task 1:
function calculateFinalScore(basePoints, bonusPoints, penalty) {
  // if bonusPoints || penalty isn't passed, they will set to 0
  bonusPoints = bonusPoints || 0;
  penalty = penalty || 0;

  //   to see what arguments do we have in function
  console.log(arguments);

  //   extra arguments should be summed up and  substracted from final score
  let extraNum1 = arguments[3] || 0;
  let extraNum2 = arguments[4] || 0;
  //   return the value of function
  return basePoints + bonusPoints - penalty - (extraNum1 + extraNum2);
}
console.log(calculateFinalScore(2, 2, 0, 1, 0.5));

// Task 2:
const calculateTotalPrice = (price, deliveryFee, discount) => {
  // if  deliveryFee or discount isn't passed function must return 0;
  deliveryFee = deliveryFee || 0;
  discount = discount || 0;

  // return value:
  return price + deliveryFee - discount;
};
console.log(calculateTotalPrice(100, 20, 10));
