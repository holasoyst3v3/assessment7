//****NUMERO UNO***** */


let arr = [234, 1167, 198298, 102, 3, 47, -198298];
let sumZero = "false";
for (let i = 0; i < arr.length; i++) {
  for (let k = 0; k < arr.length; k++) {
    if (i !== k) {
      if (arr[i] + arr[k] === 0) {
        sumZero = "true";
      }
    }
  }
}
console.log(sumZero);


//******NUMERO DOS***** */


function anyUniqueChar(word) {
      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word.length; j++) {
          if (i === j) {
          } else {
            if (word[i] === word[j]) {
                return false
            }
          }
        }
      }
      return true
    }
console.log(anyUniqueChar("Monday Mondaay"));


//******NUMERO TRES***** */


function thePangram(string) {
  let stringArr = string.toLowerCase();
  let abc = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < abc.length; i++) {
    if (stringArr.indexOf(abc[i]) < 0) {
      return true;
    }
  }
  return false;
}

console.log(thePangram("A wizards job is to vex chumps quickly in fog"));


//******NUMERO CUATRO***** */


function findLongestWord(string) {
  let words = string.split(" ");
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

console.log(findLongestWord("hi hello welcome"));