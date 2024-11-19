"use strict";
/*    
      COSC1350
      Midterm

      Project to create a customer queue
      Author: Rylee Leavitt
      Date:   11/18/24

      Filename: calculator.js
*/

window.onload = function() {
   function calculateTip() {
       let billAmount = document.getElementById("billAmount").value;
       let serviceQuality = document.getElementById("serviceQuality").value;
       let output = document.getElementById("output");

       if (billAmount === "") {
           output.textContent = "Please enter a bill amount.";
           return;
       }

       let tipAmount = billAmount * serviceQuality;
       output.textContent = `You should tip $${tipAmount.toFixed(2)}`;
   }

   document.getElementById("calculateTip").onclick = calculateTip;
};





