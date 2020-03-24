// Only change code below this line
function countdown1(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n); // countArray.splice(0, 0, n);
    return countArray;
  }
}

function countdown2(n) {
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}

function countdown3(n) {
  return n < 1 ? [] : [n, ...countdown(n - 1)];
}

// Only change code above this line
console.log(countdown1(5)); // [5, 4, 3, 2, 1]
console.log(countdown2(5)); // [5, 4, 3, 2, 1]
console.log(countdown3(5)); // [5, 4, 3, 2, 1]


