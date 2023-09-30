
let itemPrice = 50;
let itemQuantity = 3;
let itemDiscount = 10; // in percentage
let threshold = 10;
let itemTaxRate = 15; //in percentage

let subTotal = itemPrice * itemQuantity;
let discount = 0;

discount = subTotal>10?subTotal * (itemDiscount/100):0;

let itemTax = (subTotal - discount) * (itemTaxRate/100);

let Total = subTotal - discount + itemTax;

console.log(`original price: ${itemPrice}
itemQuantity: ${itemQuantity}
sub total: ${subTotal} 
discount amount: ${itemDiscount}
sub total after discount: ${discount}
tax amount: ${itemTax} 
total cost: ${Total}`);