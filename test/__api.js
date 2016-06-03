var expect = require('expect');

var request = require('supertest');
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
});
