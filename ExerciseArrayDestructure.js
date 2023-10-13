//Destructure to extract the first and second colors into variables
const colors = ['Red', 'Green', 'Yellow'];
let [color1, color2] = colors;
console.log(`firstColor: ${color1} secondColor: ${color2}`);

//Destruct to skip the first two colors extract the third colors into variables
let [,,thirdElement] = colors;
console.log(`thirdColor: ${thirdColor}`);

//Destruct to extract the first fruit into variables firstFruit and remaining fruits called otherFruits
let [firstElement, ...remainingColors] = colors;
console.log(`firstElement: ${firstElement} remainingColors: ${remainingColors}`);

//Default Values
let [first = 'green'] = [];
console.log(`first: ${first}`);

//Swapping values
const a = 4;
const b = 5;
[a,b] = [b.a]
console.log(`a: ${a} b: ${b}`);