describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 25;
      tipAmtInput.value = 5;
    });


    it("should add curPayment object to all payments on submitPaymentInfo()", function() {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('25');
    expect(allPayments['payment1'].tipAmt).toEqual('5');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it("should create new payment oncreateCurPayment()", function() {
    let testData = {
      billAmt: '25',
      tipAmt: '5',
      tipPercent: 20
    }

    expect(createCurPayment()).toEqual(testData);
    });
    
    it("should  create table row element and pass to append with input value on appendPaymentTable()", function(){
    let curPayment = createCurPayment();
    allPayments['payment1']  = curPayment;
    
    appendPaymentTable(curPayment);

    let listItem = document.querySelectorAll('#paymentTable tbody tr td');

    expect(listItem[0].innerText).toEqual ('$25');
    expect(listItem[1].innerText).toEqual('$5');
    expect(listItem[2].innerText).toEqual('20%');
    });

    afterEach(function(){
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentId = 0;
      paymentTbody.innerHTML = '';
      allPayments = {};
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
    });
});