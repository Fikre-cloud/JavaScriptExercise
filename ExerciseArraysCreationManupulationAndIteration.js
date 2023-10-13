// Create an array
const fruits = ['Apple', 'Banana', 'Cherry', 'Strawberry'];
// const fruits1 = new Array('Apple', 'Banana', 'Cherry', 'Strawberry',)

//Access and log the second element
console.log(fruits[1]);
let secondFruit = fruits[1];

//Change the third element
fruits[2] = 'grape';
console.log(fruits);

//log the length of the array
console.log(fruits.length);

//Add a new element and remove it
fruits.push('Kiwi');
console.log(fruits);
fruits.pop();
console.log(fruits);

//Create a For Loop to iterate
const fruit = ['Apple', 'Banana', 'Cherry',]
for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

//Use the ForEach method to iterate
const fruitF = ['Apple', 'Banana', 'Cherry'];

fruitF.forEach((fruitF) => {
    console.log(fruitF);
});

// Using different way to iterate

console.log(`Using a for loop:`);
for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}
console.log(`Using a forEach loop:`);
fruit.forEach((fruit) => {
    console.log(fruit);
});
