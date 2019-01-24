import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | conference-service', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:conference-service');
    assert.ok(service);
  });
});
