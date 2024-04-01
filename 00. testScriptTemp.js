//YOU CAN ADD HERE A CODE THAT WILL BE EXECUTED AFTER THE REQUEST IS SENT AND RESPONCE IS RECIEVED

//VERIFYING STATUS CODES
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

//TESTING THE RESPONSE BODY
pm.test("YOUR TEST NAME", function () {
  const response = pm.response.json();
  pm.expect(response.value).to.eql("YOUR TEST VALUE");
});
//include
pm.test("YOUR TEST NAME", () => {
  const response = pm.response.json();
  pm.expect(response.error).to.include("YOUR TEST VALUE");
});

//ASSERTING RESPONSE DATA TYPE
pm.test("YOUR TEST NAME", function () {
  const response = pm.response.json();
  pm.expect(response.value).to.be.a("YOUR RESPONSE DATA TYPE");
});

//ASSERTING DATA TYPES
pm.test("YOUR TEST NAME", function () {
  const response = pm.response.json();
  pm.expect(response.value).to.be.a("DATA TYPE");
});
