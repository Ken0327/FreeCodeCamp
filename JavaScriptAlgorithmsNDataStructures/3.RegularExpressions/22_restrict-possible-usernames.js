let username = "JackOfAllTrades";
let userCheck = /^[\D]([\d][\d]+|\D+\d*)$/i; // Change this line
userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);

console.log(result)