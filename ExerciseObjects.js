//Ex1 Accessing Nested Object Properties
const student = {
    name: 'Aaron',
    age: 21,
    address: {
        street: '5212 Main st',
        city: 'Dallas', 
        zipCode: 76155
    },
};
console.log(`student city : ${student.address.city}`); 

//Ex2 what to do? Adding two Methods
// how? declare two methods inside the student object
student.greeting = function (){
    console.log('Hello'.concat (student.name));
}

 student.changeAddress = (street1, city1, zipCode1) =>{
    student.address.street = street1;
    student.address.city = city1;
    student.address.zipCode = zipCode1;  
 }

 let street1 = '3908 count St';
 let city1 = 'Fort Worth';
 let zipCode1 = 72354;

 student.greeting(); 
 student.changeAddress (street1, city1, zipCode1);
 console.log(`student city after modification : ${student.address.street}`);
 console.log(student.address);

//Ex3 Create car object
// how? declare const object name car then define the properties with their values
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2024,
}

console.log(`car model: ${car.model}`);
console.log(`car year: ${car.year}`);
console.log(`car make: ${car.make}`);
//we want to add new method
car.start = function() {
    console.log('The car is starting');
}
car.start();

// create an object literal for a book

const book ={
    title:'The wizard',
    author:'Davidson',
    pages: 476
}
console.log(`The book is: ${book.title} The author is: ${book.author} The pages: ${book.pages}`);
