"use strict";
function checkForSpam(message) {
  const toLowerCaseMessage = message.toLowerCase();
  const hasSpam =
    toLowerCaseMessage.includes("spam") || toLowerCaseMessage.includes("sale");

  return hasSpam;
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


// Спосіб 2

// function checkForSpam(message) {
// const hasSpam1 = message.includes("spam");
// const hasSpam2 = message.includes("sale");
// const lowerCaseInput1 = message.toLowerCase();
// const lowerCaseInput2 = message.toLowerCase();
// if ((hasSpam1, hasSpam2)) {
//   return true;
// } else {
//   return false;
// }
// }
