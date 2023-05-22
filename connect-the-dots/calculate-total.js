// functions, return, if, arrays, for loop

const gas = [20, 40, 100];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total >= 100) {
    console.log(`You're spending way to much !`);
    return total;
  }
  console.log(`You're good.`);
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);

console.log({
  gas: gasTotal,
  food: foodTotal,
});
