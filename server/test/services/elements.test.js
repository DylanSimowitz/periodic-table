const assert = require('assert');
const app = require('../../src/app');

describe('\'elements\' service', () => {
  it('registered the service', () => {
    const service = app.service('elements');

    assert.ok(service, 'Registered the service');
  });
});
