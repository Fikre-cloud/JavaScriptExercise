
//using for loop
for (let i = 2; i < 22; i+=2) {
    if (i % 2 == 0) { //checking if the number is even
        console.log(`first 10 positive even numbers using for loop : ${i}`);
 }
}

//using while loop
let i = 2;
let tenFirstPositiveEvenNumberCounter = 0;
while(tenFirstPositiveEvenNumberCounter<10) {
    if(i%2==0){
        tenFirstPositiveEvenNumberCounter++;
        console.log(`number sequence using while loop : ${i}`)
    }
    i++;
}

//using do-while loop

let x = 2;
let tenPositiveEvenNumberCounter = 0;
do {
    if(x%2==0){
        tenPositiveEvenNumberCounter++;
        console.log(`number sequence using do while loop : ${x}`);
    }
    x++;
}
while(tenPositiveEvenNumberCounter<10);