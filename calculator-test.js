
it('should calculate the monthly rate correctly', function () {
  // ...
  let values = {amount: 10000, years: 5, rate: 1}
  expect (calculateMonthlyPayment(values)).toEqual('170.94');
});

it("should return a result with 2 decimal places", function() {
  // ..
  let values = {amount: 175035, years: 5, rate: 1}
  expect (calculateMonthlyPayment(values)).toEqual('2992.00');
});

it("should return a result NaN", function() {
  // ..
  let values = {amount: 10000, years: 'a', rate: 1}
  expect (calculateMonthlyPayment(values)).toEqual('NaN');
});

it("should return a result NaN", function() {
  // ..
  let values = {amount: 10000, years: 1, rate: 'a'}
  expect (calculateMonthlyPayment(values)).toEqual('NaN');
});


/// etc
