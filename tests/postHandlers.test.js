const config = require('../config');

const requestBody = {
  deliveryTime: 9,
  products: [
    { id: 1, quantity: 1 },
    { id: 4, quantity: 3 }
  ]
};

// Test 1: Check Status Code
test('POST /everything-you-need/v1/calculate should return status 200', async () => {
  try {
    const response = await fetch(`${config.API_URL}/everything-you-need/v1/calculate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    expect(response.status).toBe(200);
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Warehouse calculation failed');
  }
});

// Separate the tests by one or more lines for clarity

// Test 2: Parse and Validate Data
test('POST /everything-you-need/v1/calculate should return the correct warehouse details', async () => {
  try {
    const response = await fetch(`${config.API_URL}/everything-you-need/v1/calculate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Parse the response body as JSON
    const data = await response.json();

    // Validate that the response contains the expected warehouse details
    expect(data).toHaveProperty('name', 'Everything You Need');
    expect(data).toHaveProperty('availableProducts');
    expect(Array.isArray(data.availableProducts)).toBe(true);
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Warehouse calculation failed');
  }
});
