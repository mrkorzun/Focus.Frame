console.log("Hello, world");
console.log("JavaScript is awesome!");
console.log(10);

let productName = "Mango";
console.log(productName); // "Mango"

let userName = "Mango";
console.log(userName); // "Mango"

userName = "Poly";
console.log(userName); // "Poly"

const userAge = 40;
console.log(userAge); // 40
let year = 2026

let YearOfBirth = year - userAge;
console.log(YearOfBirth);

let productSlogan = productName + userName;
console.log(productSlogan);

const value = {};  
  
if (typeof value === 'object' && value !== null) {  
  // Только здесь мы уверены, что это реальный объект  
  console.log('Это объект!');  
} else {  
  console.log('Это null или другой тип');  
}  

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

const username = "Poly";
let message = "Welcome " + username + "!";

console.log(message)

productName = "Droid";
let pricePerItem = 3500;

// Change code below this line
message = `You picked ${productName}, price per item is ${pricePerItem} credits`
console.log(message)

const pricePerDroid = 800;
let orderedQuantity = 6;
const deliveryFee = 50;
let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

message = `You ordered droids worth ${totalPrice} credits`

console.log(message)