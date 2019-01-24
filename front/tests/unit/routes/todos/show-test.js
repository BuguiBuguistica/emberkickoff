import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | todos/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:todos/show');
    assert.ok(route);
  });
});
