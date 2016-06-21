const expect = require('chai').expect;
const user = require('../src/models/user');
const util = require('rohr_karl_utility');

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

  it('Should be able to read all.', (done) => {
    user.findAll((error) => {
      util.debug('Error reading all users', error);
    }, (allUsers) => {
      expect(allUsers.length).to.be.above(0);
      done();
    });
  });

  it('Should be able to read one', (done) => {
    user.find(testUser, (error) => {
      util.debug('Error reading user', error);
    }, (oneUser) => {
      expect(oneUser.id).to.be.equal(testUser.id);
      done();
    });
  });

  it('Should be able to create.', () => {
    // Rule needs to be made about this
    // Allowed to supress this
    expect(testUser.id).to.not.be.null;
  });

  it('Should be able to update.', (done) => {
    const updateInfo = {
      id: testUser.id,
      name: 'Kevin',
      age: 23,
      hobby: 'paint ball',
    };
    user.update(updateInfo, (err) => {
      util.debug('User failed to update', err);
    }, (updatedDbUser) => {
      expect(updatedDbUser.name).to.be.equal(updateInfo.name);
      done();
    });
  });

  it('Should be able to delete.', (done) => {
    user.destroy(testUser, (err) => {
      util.debug('Unable to delete testuser', err);
    }, (responseFromDestroy) => {
      expect(responseFromDestroy).to.be.equal(1);
      done();
    });
  });
});
