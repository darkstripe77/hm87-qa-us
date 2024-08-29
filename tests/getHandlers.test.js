const config = require('../config');

test('GET /api/v1/kits/search should return a status 200 and details of the "Tastes of Paris" kit', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
    
    // Check that the response status code is 200
    expect(response.status).toBe(200);
    
    // Parse the response body as JSON
    const data = await response.json();
    
    // Validate that the response body contains the expected kit data
    expect(data).toHaveProperty('name', 'Tastes of Paris');  // Check that the kit name is correct
    expect(data).toHaveProperty('productsList');  // Check that the kit contains a 'productsList' property
    
    // Validate the number of products in the kit
    expect(data.productsList.length).toBeGreaterThan(0);  // Ensure there are products in the kit

    // Optionally, check specific properties of the first product in the list
    expect(data.productsList[0]).toHaveProperty('id');
    expect(data.productsList[0]).toHaveProperty('name');
    expect(data.productsList[0]).toHaveProperty('price');

  } catch (error) {
    console.error('Error fetching kit:', error);
    throw new Error('Fetching kit failed');  // Explicitly fail the test
  }
});
