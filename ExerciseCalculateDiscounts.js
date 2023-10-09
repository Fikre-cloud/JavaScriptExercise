function calculateDiscountPrice(originalPrice, discountPercentage) {
    if (isNaN (originalPrice) || isNaN (discountPercentage) || discountPercentage<0 || originalPrice<0){
    return"invalid price"; 
}
   let discount = originalPrice*(discountPercentage/100);
   return originalPrice - discount;
}
function callbackFunc(discountedPrice) {
    return discountedPrice;
}
const calculateDiscountPriceVar = (originalPrice, discountPercentage, callbackFunc) => {
    if (isNaN (originalPrice) || isNaN (discountPercentage) || discountPercentage<0 || originalPrice<0){
        return"invalid price"; 
    }
       let discountAmount = originalPrice*(discountPercentage/100);
       let discountedPrice = originalPrice - discountAmount;
       
       return callbackFunc(discountedPrice);
}

const calculateDiscountPriceResult = calculateDiscountPrice(399.99, 50);
const calculateDiscountedPriceAnoResult = calculateDiscountPriceVar(399.99, 50, callbackFunc);

console.log(`the discounted price from the named function is ${calculateDiscountPriceResult}`);
console.log(`the discounted price from the anonymous function is ${calculateDiscountedPriceAnoResult}`);