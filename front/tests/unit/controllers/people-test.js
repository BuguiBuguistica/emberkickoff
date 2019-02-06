import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | people', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:people');
    assert.ok(controller);
  });

  test('set is call', function(assert) {
    const controller = this.owner.lookup('controller:people');
    const param = 'test';

    controller.send('onFilter', param)

    assert.equal(controller.get('param'), param);
  });

  test('computed property changes', function(assert) {
    const controller = this.owner.lookup('controller:people');
    const param = 'test';

    const model = [{
      company_name: '',
      first_name: 'test',
      gender: null,
      id: '1068c3ed-1287-40ec-af6b-95a3c992abed',
      last_name: 'test'
    },
    {
      company_name: '',
      first_name: 'alala',
      gender: null,
      id: '1068c3ed-1287-40ec-af6b-95a3c992abed',
      last_name: 'Dylan'
    }];

    const result = [model[0]];

    controller.set('model', model);
    controller.send('onFilter', param)

    assert.deepEqual(controller.get('peopleModel'), result);
  });
});
