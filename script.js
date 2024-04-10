/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: 
      Date:   

      Filename: script.js
 */
 




// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }


 // Constants declaration
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

function calcTotal() {
   const CHICKEN_PRICE = 10;
   const HALIBUT_PRICE = 15;
   const BURGER_PRICE = 8;
   const SALMON_PRICE = 12;
   const SALAD_PRICE = 6;
   const SALES_TAX = 0.1; // 10% sales tax

   let cost = 0;

   const buyChicken = document.getElementById("chicken").checked;
   const buyHalibut = document.getElementById("halibut").checked;
   const buyBurger = document.getElementById("burger").checked;
   const buySalmon = document.getElementById("salmon").checked;
   const buySalad = document.getElementById("salad").checked;

   // Calculate cost
   if (buyChicken) cost += CHICKEN_PRICE;
   if (buyHalibut) cost += HALIBUT_PRICE;
   if (buyBurger) cost += BURGER_PRICE;
   if (buySalmon) cost += SALMON_PRICE;
   if (buySalad) cost += SALAD_PRICE;

   // Display total cost
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

   // Calculate tax
   const tax = cost * SALES_TAX;

   // Display tax
   document.getElementById("foodTax").innerHTML = formatCurrency(tax);

   // Calculate total bill
   const totalCost = cost + tax;

   // Display total bill
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

function formatCurrency(amount) {
   return "$" + amount.toFixed(2); // Assuming USD currency
}

// Event handler for the element with id "chicken"
document.getElementById("chicken").addEventListener("click", function() {
   calcTotal();
});

// Event handler for the element with id "halibut"
document.getElementById("halibut").addEventListener("click", function() {
   calcTotal();
});

// Event handler for the element with id "burger"
document.getElementById("burger").addEventListener("click", function() {
   calcTotal();
});

// Event handler for the element with id "salmon"
document.getElementById("salmon").addEventListener("click", function() {
   calcTotal();
});

// Event handler for the element with id "salad"
document.getElementById("salad").addEventListener("click", function() {
   calcTotal();
});
