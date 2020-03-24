function rangeOfNumbers1(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
};

function rangeOfNumbers2(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

function rangeOfNumbers3(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : [...rangeOfNumbers(startNum, endNum - 1), endNum];
}

console.log(rangeOfNumbers1(6, 9));