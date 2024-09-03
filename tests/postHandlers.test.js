const config = require('../config');
const requestBody = {
    deliveryTime: 9,
    products: [
        { id: 1, quantity: 1 },
        { id: 4, quantity: 3 }
    ]
};

test('Should return status 200 for POST /everything-you-need/v1/calculate', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/everything-you-need/v1/calculate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Warehouse calculation failed');
    }

    expect(response.status).toBe(200);
});

test('Should return the correct warehouse details for POST /everything-you-need/v1/calculate', async () => {
    let response;
    let data;
    try {
        response = await fetch(`${config.API_URL}/everything-you-need/v1/calculate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        data = await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Warehouse calculation failed');
    }

    expect(data).toHaveProperty('name', 'Everything You Need');
    expect(data).toHaveProperty('availableProducts');
    expect(Array.isArray(data.availableProducts)).toBe(true);
});
