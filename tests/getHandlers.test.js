const config = require('../config');

test('Should return status 200 for GET /api/v1/kits/search', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
    } catch (error) {
        console.error('Error fetching kit:', error);
        throw new Error('Fetching kit failed');
    }

    expect(response.status).toBe(200);
});

test('Should return the correct data for the "Tastes of Paris" kit for GET /api/v1/kits/search', async () => {
    let response;
    let data;
    try {
        response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
        data = await response.json();
    } catch (error) {
        console.error('Error fetching kit:', error);
        throw new Error('Fetching kit failed');
    }

    expect(data).toHaveProperty('name', 'Tastes of Paris');
    expect(data).toHaveProperty('productsList');
    expect(data.productsList.length).toBeGreaterThan(0);
    expect(data.productsList[0]).toHaveProperty('id');
    expect(data.productsList[0]).toHaveProperty('name');
    expect(data.productsList[0]).toHaveProperty('price');
});
