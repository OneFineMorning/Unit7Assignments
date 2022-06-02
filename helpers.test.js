describe("helpers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 20;
    tipAmtInput.value = 5;
    submitPaymentInfo(); 
});
   
it("should sum payment total on sumPaymentTotal()", function() {
  expect(sumPaymentTotal('tipAmt')).toEqual(5);
  expect(sumPaymentTotal('billAmt')).toEqual(20);
  expect(sumPaymentTotal('tipPercent')).toEqual(25);

    billAmtInput.value = 20;
    tipAmtInput.value = 5;
    submitPaymentInfo();

  expect(sumPaymentTotal('tipAmt')).toEqual(10);
  expect(sumPaymentTotal('billAmt')).toEqual(40);
  expect(sumPaymentTotal('tipPercent')).toEqual(50);
});

it("should convert bill and tip amount into tip percent on calculateTipPercent()", function() {
  expect(calculateTipPercent(20, 5)).toEqual(25);
});

it("should append a newly created td on appendTd()", function (){
    let newTr = document.createElement('tr');
    
    appendTd(newTr, 'test');
    
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test');

});



});