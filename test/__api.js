var expect = require('expect');
var request = require('supertest');

describe('User Model', () => {
  before(() => {
    const mockUser = {
      name: 'Cpt. Hydra',
      age: 23,
      hobby: 'Hailing',
    };
    user.create(mockUser, (error) => {
      util.debug('Error creating mock user', error);
    });
  });
});

describe('API', function(){
  var server;
  beforeEach( function(){
    server = require('../src/server.js');
  });

  afterEach( function(){
    server.close();
  });
   // it() is bullet points 'actual test'
  it('Should load', function(done){
    request(server).get('/api/').set('Accept', 'application/json').expect('Content-type', /json/, done);
  });

  it('/api/ should return home: true', function(done){
    request(server).get('/api/').set('Accept', 'application/json').expect('Content-type', /json/).expect(200, {home: 'true'}, done);
  });

  it('/api/users/id should return a user object with Karl Rohr', function(done){
    var fakeUserId = 347;
    request(server).get('/api/users/' + fakeUserId).set('Accept', 'application/json').expect('Content-type', /json/).expect(200, {name: 'Karl Rohr'}, done);
  });
});
