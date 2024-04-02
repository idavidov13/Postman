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

//Setting Variables from Script
pm.collectionVariables.set("KEY", "VALUE");
//In many cases, the best practice is to create a test, which purpose is to check if the response provide the needed information, and within this test to set the variable.

pm.test("YOUR TEST NAME", () => {
  const res = pm.response.json();

  pm.expect(res).to.be.an("TYPE");
  pm.expect(res.length).to.be.above(0);

  const el = res[0];
  pm.expect(el).to.be.an("TYPE");
  pm.expect(el).to.haveOwnProperty("ATTRIBUTE");
  pm.expect(el.id).to.be.a("TYPE");
  pm.expect(el).to.haveOwnProperty("ATTRIBUTE");
  pm.expect(el.inStock).to.be.true;

  pm.collectionVariables.set("elId", el.id);
});

//Getting Variables from Script
pm.collectionVariables.get("KEY");
//When we use variables for making a requst, we can test if the response has the correct data agains these variables.
pm.test("YOUR TEST NAME", () => {
  const response = pm.response.json();
  pm.expect(response).to.haveOwnProperty("ATTRIBUTE");
  pm.expect(response.id).to.eql(pm.collectionVariables.get("KEY"));
});

//Using loops to check if creatinon/deletion is completed successfully
// FOR LOOP - for (initialization; condition; afterthough) {statement}
// ITERATING THROUG ARRAYS
let arr = [];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// EXAMPLE WITH CLASIC FOR LOOP
pm.test("Check if the last order is submitted", () => {
  const response = pm.response.json();
  pm.expect(response).to.be.a("array");

  const curOrderId = pm.collectionVariables.get("orderId");
  let flag = false;
  for (let i = 0; i < response.length; i++) {
    if (response[i].id === curOrderId) {
      flag = true;
      break;
    }
  }
  pm.expect(flag).to.be.true;
});
// EXAMPLE WITH forEach
pm.test("forEach check if the last order is submitted", () => {
  const response = pm.response.json();
  pm.expect(response).to.be.a("array");
  const curOrderId = pm.collectionVariables.get("orderId");
  let flag = false;

  response.forEach((order) => {
    if (order.id === curOrderId) {
      flag = true;
    }
  });

  pm.expect(flag).to.be.true;
});

//Finding data in an array with find method
pm.test("find method check if the last order is submitted", () => {
  const response = pm.response.json();
  pm.expect(response).to.be.a("array");
  const curOrderId = pm.collectionVariables.get("orderId");
  const found = response.find((order) => {
    return order.id == curOrderId;
  });

  pm.expect(found.id).to.eql(curOrderId);
});
