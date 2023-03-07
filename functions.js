const stringlength = (str) => {
  str = str.split("");
  if (!str.length >= 1 || str.length > 10) {
    throw new Error("string did not matches our conditions");
  }
  let count = 0;
  str.forEach((char) => {
    count += 1;
  });
  str = str.join("");
  return count;
};
const reverseString = (str) => {
  str = str.split("");
  let newString = "";
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newString += str[i];
  }
  str = str.join("");
  str = newString;
  return str;
};
class calculator {
  add(a, b) {
    return a + b;
  }
  substract(a, b) {
    return a - b;
  }
  mutiply(a, b) {
    return a * b;
  }
  devide(a, b) {
    return a / b;
  }
}
const captlize = (str) => {
  str = str.split("");
  str[0] = str[0].toUpperCase();
  str = str.join('');
  return str;
};


const calc = new calculator();
module.exports = { stringlength, reverseString, captlize, calc };
