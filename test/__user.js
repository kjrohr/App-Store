'use strict'

const expect = require('chai').expect;
const user = require('../src/models/user');
const util = require('../lib/util');

let testUser = {};

describe('Users', () => {

  before(() => {
    const mockUser = {
      name: 'Cpt. Hydra',
      age: 23,
      hobby: 'Hailing',
    };
    user.create(mockUser, (error) => {
      util.debug('Error creating mock user', error);
    }, (newDbUser) => {
      testUser = newDbUser;

    });
  });

  it('Should be able to one read.', (done) => {
    user.findAll((error) => {
      util.debug("Error reading all users", error);
    }, (allUsers) => {
    expect(allUsers.length).to.be.above(1);
    done();
    });
  });

  it('Should be able to read all', () => {
    const testUser = { id: 1000 }
    user.find(testUser, (error) => {
      util.debug('Error reading user', error);
    }, (oneUser) => {
      expect(oneUser.id).to.be.equal(testUser.id);
    });
  });

  it('Should be able to create.', () => {
    expect(testUser.id).to.not.be.null;
  });

  it('Should be able to update.', () => {
    const updateInfo = {
      id: testUser.id,
      name: 'Kevin',
      age: 23,
      hobby: 'paint ball'
    };
    user.update(updateInfo, (err) => {
      util.debug("User failed to update", err);
    }, (updatedDbUser) => {
      expect(updatedDbUser.name).to.be.equal(updateInfo.name);
      done();
    });
  });

  it('Should be able to delete.', () => {
    user.destroy(testUser, (err) => {
      util.debug("Unable to delete testuser", err);
    }, (responseFromDestroy) => {
      expect(responseFromDestroy).to.be.equal(1);
      done();
    });
  });

});
