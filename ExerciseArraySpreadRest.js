/*Give two arrays and create a new array using spread 
operator to combine both arrays together*/
const fruits1 = ['Mango', 'Orange', 'Avocado',];
const fruits2 = ['Banana', 'Watermelon',];
const fruits3 = ['Strawberry', 'Orange',];

const combinedFruits = [...fruits1, ...fruits2, ...fruits3];
console.log(`combined Fruits): ${combinedFruits}`);

/*Create a function that takes three arguments and return 
their sum using the spread operator to pass an array of numbers*/
function addNumbers(number1, number2, number3) {
    if(isNaN(number1) || isNaN(number2) || isNaN(number3)){
        return;
    }
    return number1 + number2 + number3;
}
const arrayOfNumbers = [1,2,3]

let result = addNumbers(...arrayOfNumbers);
console.log(`sum of the numbers: ${result}`);

/*Create a multiply function takes first number as a regular parameter 
and the rest as an array using rest operator*/
const multiply = (number1, ...numbers) => {
    if(isNaN(number1) || !Array.isArray(numbers)){
        return;
    }
   let product = 1;
   numbers.forEach(number => {
    product *= number;})

    return number1 * product; 
}

let result1 = multiply(1,2,3,4,);
console.log(`product result from rest operators: ${result1}`);

// use the spread operator to create a copy of an array called copied fruits

const [...copyOfFruits] = fruits1
console.log(`copying fruits: ${copyOfFruits}`);