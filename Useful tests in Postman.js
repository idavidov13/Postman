// Check the status code
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

// Get all products
pm.test('At least one available product exist', () => {
const response = pm.response.json();
pm.expect(response).to.be.an('array');
pm.expect(response.length).to.be.above(0);
const product = response[1];
pm.expect(product).to.be.an('object');
pm.expect(product).to.be.haveOwnProperty('id');
pm.expect(product.id).to.be.a('number');
pm.expect(product).to.be.haveOwnProperty('inStock');
pm.expect(product.inStock).to.be.true;
pm.collectionVariables.set('productId', product.id);
})

//Create new cart
pm.test('Cart is created successfully', () => {
    const response = pm.response.json();
    pm.expect(response).to.be.an('object');
    pm.expect(response).to.haveOwnProperty('created');
    pm.expect(response.created).to.be.true;
    pm.expect(response).to.haveOwnProperty('cartId');
    pm.expect(response.cartId).to.be.a('string');
    pm.collectionVariables.set('cartId', response.cartId);
})

//Add an item to the cart
pm.test('Add item to a cart successfully', () => {
    const response = pm.response.json();
    pm.expect(response).to.be.an('object');
    pm.expect(response).to.haveOwnProperty('created');
    pm.expect(response.created).to.be.true;
    pm.expect(response).to.haveOwnProperty('itemId');
    pm.expect(response.itemId).to.be.a("number");
    pm.collectionVariables.set('lastAddedItem', response.itemId);
})

//Create a new order
pm.test('Order was created successfully', () => {
    const response = pm.response.json();
    pm.expect(response).to.be.an('object');
    pm.expect(response).to.haveOwnProperty('created');
    pm.expect(response.created).to.be.true;
    pm.expect(response).to.haveOwnProperty('orderId');
    pm.expect(response.orderId).to.be.a("string");
    pm.collectionVariables.set('lastOrderId', response.orderId);
})

//Check if the order is deleted successfully
pm.test("The order was successfully deleted", () => {
    const response = pm.response.json();
    pm.expect(response).to.haveOwnProperty('error');
    pm.expect(response.error).to.be.a('string');
    pm.expect(response.error).to.contain(pm.collectionVariables.get('lastOrderId'));
})
