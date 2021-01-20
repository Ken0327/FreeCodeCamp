var count = 0;

function cc(card) {
  // Only change code below this line

  // Solution 1
  var regex = /[JQKA]/;
  if (card > 1 && card < 7) {
    count++;
  }
  else if (card === 10 || String(card).match(regex)) {
    count--;
  }

  // Solution 2
  // switch (card) {
  //     case 2:
  //     case 3:
  //     case 4:
  //     case 5:
  //     case 6:
  //       count++;
  //       break;
  //     case 10:
  //     case "J":
  //     case "Q":
  //     case "K":
  //     case "A":
  //       count--;
  //       break;
  // }  

  if (count > 0) {
    return count+ " Bet";
  }
  return count + " Hold";
  
  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
