//Iterating using for loop
const numbers = [1, 2, 3, 4]
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

//Iterating using foreach method
const number = [1, 2, 3, 4];

number.forEach((number) => {
    console.log(number);
});

//Iterating using map method
const numbersM = [1, 2, 3, 4];
const radicalNumbersM = numbersM.map((number) =>{
    return Math.sqrt(number);
});

console.log(radicalNumbersM);

//Iterating using filter method
const ages = [15, 20, 31, 4, 37];

const adults = ages.filter((age) => {
    return age >= 18
});

console.log(adults);