const createPerson = (name, age, gender) => ({name, age, gender});
  // Only change code above this line

const createPerson1 = (name, age, gender) => {
  "use strict";
  return {
    name: name,
    age: age,
    gender: gender
  };
};

console.log(createPerson('Ken', '28', 'Man'));
