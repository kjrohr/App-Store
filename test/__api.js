// const expect = require('expect');
const request = require('supertest');

describe('API', () => {
  let server;
  beforeEach(() => {
    server = require('../src/server.js');
  });

  afterEach(() => {
    server.close();
  });
   // it() is bullet points 'actual test'
  it('Should load', (done) => {
    request(server).get('/api/').set('Accept', 'application/json')
    .expect('Content-type', /json/, done);
  });

  it('/api/ should return home: true', (done) => {
    request(server)
    .get('/api/')
    .set('Accept', 'application/json')
    .expect('Content-type', /json/)
    .expect(200, { home: 'true' }, done);
  });

  it('/api/users/id should return a user object with Lindsay', (done) => {
    const fakeUserId = 3;
    request(server)
    .get('/api/users/' + fakeUserId)
    .set('Accept', 'application/json')
    .expect('Content-type', /json/)
    .expect(200, {
      age: 22,
      createdAt: '2016-06-09T01:36:20.000Z',
      hobby: 'witcher',
      id: 3,
      name: 'Lindsay',
      updatedAt: '2016-06-12T04:46:52.000Z',
    }, done);
  });
});
