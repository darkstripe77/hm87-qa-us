const config = require('../config');

// Test 1: Check Status Code
test('DELETE /api/v1/kits/1 should return status 200', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
      method: 'DELETE',
    });
    expect(response.status).toBe(200);
  } catch (error) {
    console.error('Error deleting kit:', error);
    throw new Error('Kit deletion failed');
  }
});

// Separate the tests by one or more lines for clarity

// Test 2: Parse and Validate Data
test('DELETE /api/v1/kits/1 should confirm deletion in response', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
      method: 'DELETE',
    });

    // Parse the response body as JSON
    const data = await response.json();

    // Validate that the response confirms the deletion
    expect(data).toHaveProperty('ok', true);
  } catch (error) {
    console.error('Error deleting kit:', error);
    throw new Error('Kit deletion failed');
  }
});
