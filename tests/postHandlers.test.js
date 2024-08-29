const config = require('../config');

const requestBody = {
  deliveryTime: 9,
  products: [
    { id: 1, quantity: 1 },
    { id: 4, quantity: 3 }
  ]
};

test('POST /everything-you-need/v1/calculate should return a status 200 and the warehouse details', async () => {
  try {
    const response = await fetch(`${config.API_URL}/everything-you-need/v1/calculate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Check that the response status code is 200
    expect(response.status).toBe(200);

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
