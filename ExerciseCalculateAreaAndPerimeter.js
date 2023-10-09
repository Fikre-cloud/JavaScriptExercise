const PI = 3.14;
const calculateRectangleArea = (L,W) => {
    if (isNaN(L) || isNaN(W) || L<=0 || W<=0){
        return;
    }
     return L*W
}

function calculateRectanglePerimeter(L,W){
if (isNaN(L) || isNaN(W) || L<=0 || W<=0){
    return;
}
   return 2*(L+W);
}

const calculateCircleArea = (r)=>{
    if (isNaN(r) || r<=0){
        return;
    }
    return PI*Math.pow(r,2);
}

const calculateCircleCircumference = (r)=>{
    if (isNaN(r) || r<=0){
        return;
    }
    return 2*PI*r;
}
let rectangleAreaResult = calculateRectangleArea(2,3); //invoking
let rectanglePerimeterResult = calculateRectanglePerimeter(2,3);
let circleAreaResult = calculateCircleArea(2);
let circleCircumferenceResult = calculateCircleCircumference(3); 

console.log(`rectangleArea: ${rectangleAreaResult}`);
console.log(`circleArea: ${circleAreaResult}`);
console.log(`rectanglePerimeter: ${rectanglePerimeterResult}`); 
console.log(`circleCircumferenceResult: ${circleCircumferenceResult}`);