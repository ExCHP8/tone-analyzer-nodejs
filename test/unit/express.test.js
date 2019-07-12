const path = require('path');
// load default variables for testing
require('dotenv').config({ path: path.join(__dirname, '../../.env.example') });

const app = require('../../app');
const request = require('supertest');

describe('express', () => {
  test('load home page when GET /', () =>
    request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200);
    })
  );

  test('404 when page not found', () => {
    return expect(request(app).get('/foo/bar'))
      .rejects
      .toMatchObject(new Error('Not Found'));
  });
});