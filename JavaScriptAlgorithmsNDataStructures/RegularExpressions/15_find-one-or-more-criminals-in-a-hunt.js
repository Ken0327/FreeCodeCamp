let crowd = "Criminal";
let reCriminals = /C+/; // Change this line

let findCriminal = crowd.match(reCriminals);

console.log(findCriminal);