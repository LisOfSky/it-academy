// https://fakerestapi.azurewebsites.net/index.html выбираете любое API.
// Покрываете все запросы в этом API тестами. Тестируете статус код и json schema.
// Можно использовать jest, mocha, jasmine на выбор.


const axios = require('axios');
const Validator = require('jsonschema').Validator;
const validate = new Validator();
const getSchema = require('../data/getAPIschema.v1.json')
const postSchema = require('../data/postAPIschema.v1.json')
const deleteSchema = require('../data/deleteAPIschema.v1.json')


describe(`GET-API Users tests`, function() {
    describe(`valid cases`, function () {
        let response;
        beforeAll(async () => {
            response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Users', {});
        });

        test(`should return status code 200`, async () => {
            expect(response.status).toBe(200);
        });

        test(`should be valid response body`, async () => {
            const result = validate.validate(response.data, getSchema);
            expect(result.valid).toBe(true);
        });
    });
});

describe(`POST-API Users tests`, function() {
    describe(`valid cases`, function () {
        let response;
        beforeAll(async () => {
            response = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Users', {
                "id": 42,
                "userName": "User 42",
                "password": "Password42"
            });
        });

        test(`should return status code 200`, async () => {
            expect(response.status).toBe(200);
        });

        test(`should be valid response body`, async () => {
            const result = validate.validate(response.data, postSchema);
            expect(result.valid).toBe(true);
        });
    });

    describe('negative cases', () => {
        let response;
        beforeAll(async () => {
            try {
                response = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Users', {
                    "id": null,
                    "userName": "User 42",
                    "password": "Password42"
                });
            } catch (err) {
                response = err;
            }
        });

        test(`should return 400 with invalid ID`, async () => {
            expect(response.response.status).toEqual(400);
        });

        test(`should return status message 'Request failed with status code 400'`, async () => {
            expect(response.message).toEqual('Request failed with status code 400');
        });
    });
});


describe(`GET-API Users tests with ID param`, function() {
    describe(`valid cases`, function () {
        let response;
        beforeAll(async () => {
            response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Users/1', {});
        });

        test(`should return status code 200`, async () => {
            expect(response.status).toBe(200);
        });

        test(`should be valid response body`, async () => {
            const result = validate.validate(response.data, postSchema);
            expect(result.valid).toBe(true);
        });
    });

    describe('negative cases', () => {
        let response;
        beforeAll(async () => {
            try {
                response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Users/0', {});
            } catch (err) {
                response = err;
            }
        });

        test(`should return 404 with nonexistent ID`, async () => {
            expect(response.response.status).toEqual(404);
        });

        test(`should return status message 'Request failed with status code 404'`, async () => {
            expect(response.message).toEqual('Request failed with status code 404');
        });
    });
});


describe(`PUT-API Users tests`, function() {
    describe(`valid cases`, function () {
        let response;
        beforeAll(async () => {
            response = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Users/1', {
                "id": 42,
                "userName": "User 42",
                "password": "Password42"  
            });
        });

        test(`should return status code 200`, async () => {
            expect(response.status).toBe(200);
        });

        test(`should be valid response body`, async () => {
            const result = validate.validate(response.data, postSchema);
            expect(result.valid).toBe(true);
        });
    });

    describe('negative cases', () => {
        let response;
        beforeAll(async () => {
            try {
                response = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Users/', {
                    "id": 42,
                    "userName": "User 42",
                    "password": "Password42"  
                });
            } catch (err) {
                response = err;
            }
        });

        test(`should return 405 without ID`, async () => {
            expect(response.response.status).toEqual(405);
        });

        test(`should return status message 'Request failed with status code 405'`, async () => {
            expect(response.message).toEqual('Request failed with status code 405');
        });
    });

    describe('negative cases', () => {
        let response;
        beforeAll(async () => {
            try {
                response = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Users/1', {
                    "id": null,
                    "userName": "User 42",
                    "password": "Password42"  
                });
            } catch (err) {
                response = err;
            }
        });

        test(`should return 400 with invalid ID`, async () => {
            expect(response.response.status).toEqual(400);
        });

        test(`should return status message 'Request failed with status code 400'`, async () => {
            expect(response.message).toEqual('Request failed with status code 400');
        });
    });
});


describe(`DELETE-API Users tests`, function() {
    describe(`valid cases`, function () {
        let response;
        beforeAll(async () => {
            response = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Users/1', {});
        });

        test(`should return status code 200`, async () => {
            expect(response.status).toBe(200);
        });

        test(`should be valid response body`, async () => {
            const result = validate.validate(response.data, deleteSchema);
            expect(result.valid).toBe(true);
        });
    });

    describe('negative cases', () => {
        let response;
        beforeAll(async () => {
            try {
                response = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Users/', {});
            } catch (err) {
                response = err;
            }
        });

        test(`should return 405 without ID`, async () => {
            expect(response.response.status).toEqual(405);
        });

        test(`should return status message 'Request failed with status code 405'`, async () => {
            expect(response.message).toEqual('Request failed with status code 405');
        });
    });
});