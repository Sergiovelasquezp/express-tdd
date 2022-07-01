const routes = require('../src/constants/constant-routes.js');

const request = require('supertest');
const app = require('../src/app.js');

describe('user registration rests', () => {
  const userData = {
    userName: 'user 1',
    email: 'user1@example.com',
    password: 'P1ssword'
  }

  it('should return 200 ok when signup request is valid', () => {
    request(app).post(routes.userRoutes.USERS_BASE_URI).send(userData).then((response) => {
      expect(response.status).toBe(200);
    })
  });

  it('should return a message when user registration is ok', () => {
    request(app).post(routes.userRoutes.USERS_BASE_URI).send(userData).then((response) => {
      expect(response.body.message).toBe('user created');
    })
  })
})