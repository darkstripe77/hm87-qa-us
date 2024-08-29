// eslint-disable-next-line no-undef
const config = require('../config');

test('DELETE /api/v1/kits/1 should delete the kit and return a status 200', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
      method: 'DELETE',
    });

    // Check that the response status code is 200
    expect(response.status).toBe(200);

    // Parse the response body as JSON
    const data = await response.json();

    // Validate that the response confirms the deletion
    expect(data).toHaveProperty('ok', true);

  } catch (error) {
    console.error(error);
    throw new Error('Kit deletion failed');
  }
});
