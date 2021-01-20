// Only change code below this line
let chewieQuote =  "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
console.log(result);

// examples
let phrase = "ba humbug";

let regexPlus = /bah+/;
let regexStar = /bah*/;

console.log(regexPlus.test(phrase)); // returns false
console.log(regexStar.test(phrase)); // returns true

phrase = "wooooow look at that!";

regexPlus = /wo+w/;
regexStar = /wo*w/;

console.log(regexPlus.test(phrase)); // returns true
console.log(regexStar.test(phrase)); // returns true