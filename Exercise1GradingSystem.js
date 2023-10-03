let testScore = 90;
let grade;
while(testScore>=50){

 if(testScore>=90 && testScore<=100){
    grade = "A";
 }else if (testScore>=80 && testScore<=89){
    grade = "B";
 }else if(testScore>=70 && testScore<=79){
    grade = "C";
 }else if(testScore>=60 && testScore<=69){
    grade = "D";
 }else{
    grade = "F";
 }

 console.log(
    `test score:${testScore} 
     grade:${grade}`);
 testScore -= 10;

}
