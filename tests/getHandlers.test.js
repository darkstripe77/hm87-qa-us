const config = require('../config');

// Test 1: Check Status Code
test('GET /api/v1/kits/search should return status 200', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
    expect(response.status).toBe(200);
  } catch (error) {
    console.error('Error fetching kit:', error);
    throw new Error('Fetching kit failed');
  }
});

// Separate the tests by one or more lines for clarity

// Test 2: Parse and Validate Data
test('GET /api/v1/kits/search should return the correct data for the "Tastes of Paris" kit', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);

    // Parse the response body as JSON
    const data = await response.json();

    // Validate that the response body contains the expected kit data
    expect(data).toHaveProperty('name', 'Tastes of Paris');
    expect(data).toHaveProperty('productsList');

    // Validate the number of products in the kit
    expect(data.productsList.length).toBeGreaterThan(0);

    // Optionally, check specific properties of the first product in the list
    expect(data.productsList[0]).toHaveProperty('id');
    expect(data.productsList[0]).toHaveProperty('name');
    expect(data.productsList[0]).toHaveProperty('price');
  } catch (error) {
    console.error('Error fetching kit:', error);
    throw new Error('Fetching kit failed');
  }
});
