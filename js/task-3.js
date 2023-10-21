// Суворий режим
'use strict';

function checkForSpam(message) {
  let check = message.toLowerCase();
  const low_one = 'SPAM';
  const lower_first_word = low_one.toLowerCase();
  const low_two = 'SaLe';
  const lower_second_word = low_two.toLowerCase();

  if (check.includes(lower_first_word) || check.includes(lower_second_word)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
