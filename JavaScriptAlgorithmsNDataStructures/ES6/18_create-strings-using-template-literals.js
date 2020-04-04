const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // Only change code below this line
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray[i] = `<li class="text-warning">${arr[i]}</li>`;
  }
  // Only change code above this line

  return resultDisplayArray;
}

function makeList1(arr) {
  "use strict";

  // Only change code below this line
  const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
  // Only change code above this line

  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray)
