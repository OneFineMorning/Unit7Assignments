
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let initialValues = {amount: 10000, years: 5, rate: 1};
      
  let loanAmount = document.getElementById("loan-amount");
  let loanYears = document.getElementById("loan-years");
  let loanRate = document.getElementById("loan-rate");

  loanAmount.value = initialValues.amount;
  loanYears.value = initialValues.years;
  loanRate.value = initialValues.rate;
  
  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
let currentValues = getCurrentUIValues();
calculateMonthlyPayment(currentValues);
updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

let numerator = (values.amount*(values.rate*(1/1200)));
let denominator = (1-Math.pow((1+(values.rate/1200)), -values.years*12));
let monthlyPayment =numerator/denominator;
let monthlyPaymentRounded = monthlyPayment.toFixed(2);

return monthlyPaymentRounded;

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
let displayMonthlyPayment = document.getElementById("monthly-payment");

displayMonthlyPayment.innerHTML = "$" + monthly;
}
