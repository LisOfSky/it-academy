const axios = require('axios');
const Validator = require('jsonschema').Validator;
const validate = new Validator();
const searchSchema = require('../data/searchAPIschema.v1.json');

describe(`lamoda search-api testing`, function() {
    describe(`valid cases`, function () {
        let response;
        beforeAll(async () => {
            response = await axios.post('https://www.lamoda.by/api/v1/search/suggest', {
                    limit: 10,
                    query: "adidas",
                    with_sis_suggests: false,
                    gender: "men"
                });
        });

        test(`should return status code 200`, async () => {
            expect(response.status).toBe(200);
        });

        test(`should be valid response body`, async () => {
            const result = validate.validate(response.data, searchSchema);
            expect(result.valid).toBe(true);
        });
    });

    describe('negative cases', () => {
        let response;
        beforeAll(async () => {
            try {
                response = await axios.post('https://www.lamoda.by/api/v1/search/suggest', {
                    limit: 10,
                    query: "",
                    with_sis_suggests: false,
                    gender: "men"
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