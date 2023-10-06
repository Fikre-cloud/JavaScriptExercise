function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return;
  }
  return a + b;
}

const subtract = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return;
  }
  return a - b;
};

const multiply = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return `Invalid data`;
  }
  return a * b;
};
const division = function (a, b) {
  if (isNaN(a) || isNaN(b) || b == 0) {
    return `Invalid data try again`;
  }
  return a / b;
};

console.log(`added result: ${add(3, 4)}; 
subtracted result: ${subtract(3, 4)};
multiplied result: ${multiply("Tom", "Charles")}; 
divided result: ${division(3,4)}`);
