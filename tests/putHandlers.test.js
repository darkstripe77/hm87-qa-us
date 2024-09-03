const config = require('../config');
const requestBody = {
    price: "175"
};

test('Should return status 200 for PUT /api/v1/products/1', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/api/v1/products/1`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Kit update failed');
    }

    expect(response.status).toBe(200);
});

test('Should confirm the price update in the response for PUT /api/v1/products/1', async () => {
    let response;
    let data;
    try {
        response = await fetch(`${config.API_URL}/api/v1/products/1`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        data = await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Kit update failed');
    }

    expect(data).toHaveProperty('ok', true);
});
