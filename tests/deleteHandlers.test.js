const config = require('../config');

test('Should return status 200 for DELETE /api/v1/kits/1', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error('Error deleting kit:', error);
        throw new Error('Kit deletion failed');
    }

    expect(response.status).toBe(200);
});

test('Should confirm deletion in response for DELETE /api/v1/kits/1', async () => {
    let response;
    let data;
    try {
        response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
            method: 'DELETE',
        });

        data = await response.json();
    } catch (error) {
        console.error('Error deleting kit:', error);
        throw new Error('Kit deletion failed');
    }

    expect(data).toHaveProperty('ok', true);
});
