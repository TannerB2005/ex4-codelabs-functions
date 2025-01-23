// 1. Truthy and Falsy check
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean("Hello")); // true
// console.log(Boolean(42)); // true
// console.log(Boolean(null)); // false

// 2. Age Eligibility
// const age = 9;
// if (age >= 18) {
//     console.log("You are eligible to vote");
// } else {
//     console.log("You are not eligible to vote");
// }

// 3. Calculate final price
// let price = 150;
// let discount = 0.20;
// let taxRate = 0.8;
// let finalPrice = price - taxRate * price * discount;
// console.log(finalPrice); // 126

// console.log(`Original Price: ${price}`);
// console.log(`Discount: ${discount}`);
// console.log(`Tax: ${taxRate}`);
// console.log(`Final Price: ${finalPrice}`)

//4. Nested If-Statements for Login



//5. Driver Age 
// age = 18
// if (age >= 18) {
//     console.log("You can drive");
//     } else {
//         console.log("You need a license to drive.");
//     }

//6. Logical Operators Practice
// let isHoliday = false;
// let isWeekend = true;

// if(isWeekend || isHoliday) {
//     console.log('You can relax today!');
// } else {
//     console.log('It's a workday.');
// }

//7. Function: greeting
// function greet(name) {
//     console.log(`Hello. ${name}!`);
// }

// greet("John");

//8. Function: Square a Number
// let num = 5
// let num2 = 7
// let num3 = 10

// let squared = num ** 2;
// let squared2 = num2 ** 2;
// let squared3 = num3 ** 2;

// console.log(squared, squared2, squared3
// )
//9. Function with Default Parameters
// function calculateDiscount(price = 100, discountRate = 0.1) {
// 	return price - (price * discountRate);
// }

// console.log(price)


//10. Tax and Discount Calculatorlet 
function calculatePrice(originalPrice, taxRate, discountRate) {
    //Convert to decimals
    taxRate = taxRate / 100;
    discountRate = discountRate / 100;

    //Calculate Discount
    const discountAmount = originalPrice * discountRate;
    const priceAfterDiscount = originalPrice - discountAmount;

    //Calc tax
    const taxAmount = priceAfterDiscount * taxRate;
    const finalPrice = priceAfterDiscount + taxAmount;

    return finalPrice;
}

let originalPrice = 100;
let taxRate = 10;
let discountRate = 20;

    console.log(`Original Price: ${originalPrice}`);
    console.log(`Discount: ${discountRate}%`);
    console.log(`Tax: ${taxRate}%`);

    const finalPrice = calculatePrice(originalPrice, taxRate, discountRate);

    setTimeout(() => {
        console.log(`Final Price: ${finalPrice}`);
    }, 500);
    
