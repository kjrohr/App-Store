const expect = require('chai').expect;
const apps = require('../src/models/apps');
const util = require('../lib/util');

let testApp = {};

describe('Apps', () => {
  before(() => {
    const mockApp = {
      name: 'TestApp',
      code: 'test',
    };
    apps.create(mockApp, (error) => {
      util.debug('Error creating mock app', error);
    }, (newDbApp) => {
      testApp = newDbApp;
    });
  });

  it('Should be able to read all apps.', (done) => {
    apps.findAll((error) => {
      util.debug('Error reading all app', error);
    }, (allApps) => {
      expect(allApps.length).to.be.above(0);
      done();
    });
  });

  it('Should be able to read one app', (done) => {
    apps.find(testApp, (error) => {
      util.debug('Error reading app', error);
    }, (oneApp) => {
      expect(oneApp.id).to.be.equal(testApp.id);
      done();
    });
  });

  it('Should be able to create an app.', () => {
    // Rule needs to be made about this
    // Allowed to supress this
    expect(testApp.id).to.not.be.null;
  });

  it('Should be able to update an app.', (done) => {
    const updateInfo = {
      id: testApp.id,
      name: 'approved app',
      code: 'app',
    };
    apps.update(updateInfo, (err) => {
      util.debug('App failed to update', err);
    }, (updatedDbUser) => {
      expect(updatedDbUser.name).to.be.equal(updateInfo.name);
      done();
    });
  });

  it('Should be able to delete an app.', (done) => {
    apps.destroy(testApp, (err) => {
      util.debug('Unable to delete testapp', err);
    }, (responseFromDestroy) => {
      expect(responseFromDestroy).to.be.equal(1);
      done();
    });
  });
});
