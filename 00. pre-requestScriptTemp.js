//YOU CAN ADD HERE A CODE THAT WILL BE EXECUTED BEFORE THE REQUEST IS SEND
console.clear();

//Random Data
{
  {
    $randomXXXXXXX;
  }
}

//Random Value
function getRandomNumber(maxValue) {
  return Math.floor(Math.random() * maxValue + 1);
}

pm.collectionVariables.set("randomQuantity", getRandomNumber(14));

//Random email
function getRandomEmail(domain) {
  let name = Math.random().toString(36).substring(7);
  return `${name}@${domain}`;
}

//Random name
function randomName() {
  let randomStr = Math.random().toString(36).substring(7);
  return randomStr;
}
