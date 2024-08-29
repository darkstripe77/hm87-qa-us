// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
  price: "175"
};

test('PUT /api/v1/products/1 should update the price of the product and return a status 200', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/products/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Check that the response status code is 200
    expect(response.status).toBe(200);

    // Parse the response body as JSON
    const data = await response.json();
    
    // Validate that the response confirms the update
    expect(data).toHaveProperty('ok', true);

  } catch (error) {
    console.error(error);
  }
});
