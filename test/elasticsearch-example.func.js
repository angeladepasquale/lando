/*
 * This file was automatically generated, editing it manually would be foolish
 *
 * See https://github.com/lando/leia for more
 * information on how all this magic works
 *
 * id: elasticsearch-example
 * runs-from: ../examples/elasticsearch
 */
// We need these deps to run our tezts
const chai = require('chai');
const CliTest = require('command-line-test');
const path = require('path');
chai.should();

/* eslint-disable max-len */

describe('elasticsearch-example', function() {
  this.retries(6);

  // These are tests we need to run to get the app into a state to test
  // @todo: It would be nice to eventually get these into mocha before hooks
  // so they run before every test
  it('start up the elastic search example', done => {
    process.chdir(path.resolve(__dirname, '../examples/elasticsearch'));
    const cli = new CliTest();
    cli.exec('lando start').then(res => {
      if (res.error === null) {
        done();
      } else {
        done(res.error);
      }
    });
  });

  // These tests are the main event
  // @todo: It would be nice to eventually get these into mocha after hooks
  // so they run after every test
  it('verify the portforward', done => {
    process.chdir(path.resolve(__dirname, '../examples/elasticsearch'));
    const cli = new CliTest();
    cli.exec('lando info | grep 9999').then(res => {
      if (res.error === null) {
        done();
      } else {
        done(res.error);
      }
    });
  });

  it('verify we have the node cli at the correct version', done => {
    process.chdir(path.resolve(__dirname, '../examples/elasticsearch'));
    const cli = new CliTest();
    cli.exec('lando node -v | grep v6.10.').then(res => {
      if (res.error === null) {
        done();
      } else {
        done(res.error);
      }
    });
  });

  it('verify we have npm', done => {
    process.chdir(path.resolve(__dirname, '../examples/elasticsearch'));
    const cli = new CliTest();
    cli.exec('lando npm -v').then(res => {
      if (res.error === null) {
        done();
      } else {
        done(res.error);
      }
    });
  });

  it('verify we have yarn', done => {
    process.chdir(path.resolve(__dirname, '../examples/elasticsearch'));
    const cli = new CliTest();
    cli.exec('lando yarn --version').then(res => {
      if (res.error === null) {
        done();
      } else {
        done(res.error);
      }
    });
  });

  it('verify the es version', done => {
    process.chdir(path.resolve(__dirname, '../examples/elasticsearch'));
    const cli = new CliTest();
    cli.exec('lando ssh appserver -c "curl -XGET search:9200 | grep 5.4."').then(res => {
      if (res.error === null) {
        done();
      } else {
        done(res.error);
      }
    });
  });

  it('verify we can access es', done => {
    process.chdir(path.resolve(__dirname, '../examples/elasticsearch'));
    const cli = new CliTest();
    cli.exec('lando ssh appserver -c "curl localhost | grep \"All is well\""').then(res => {
      if (res.error === null) {
        done();
      } else {
        done(res.error);
      }
    });
  });

  // These are tests we need to run to get the app into a state to test
  // @todo: It would be nice to eventually get these into mocha before hooks
  // so they run before every test
  it('destroy the app', done => {
    process.chdir(path.resolve(__dirname, '../examples/elasticsearch'));
    const cli = new CliTest();
    cli.exec('lando destroy -y').then(res => {
      if (res.error === null) {
        done();
      } else {
        done(res.error);
      }
    });
  });
});
