const config = require('../config');

const requestBody = {
  price: "175"
};

// Test 1: Check Status Code
test('PUT /api/v1/products/1 should return status 200', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/products/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    expect(response.status).toBe(200);
  } catch (error) {
    console.error(error);
    throw new Error('Kit update failed');
  }
});


// Test 2: Parse and Validate Data
test('PUT /api/v1/products/1 should confirm the price update in the response', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/products/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Parse the response body as JSON
    const data = await response.json();

    // Validate that the response confirms the update
    expect(data).toHaveProperty('ok', true);
  } catch (error) {
    console.error(error);
    throw new Error('Kit update failed');
  }
});
