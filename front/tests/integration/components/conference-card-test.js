import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { render } from '@ember/test-helpers';

module('Integration | Component | conference-card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... }); 
    const item = {
      conference_date: "2019-05-10T10:30:00.000+0000",
      head_of_opc: { id: "1a88156e-c660-43cb-92a9-e0104f93c708", first_name: "Alejandro", last_name: "1116" },
      id: 11,
      level: { id: "f207efb7-24f0-48d4-9c4-948504948901", name: "L2" },
      number_of_employees: 4,
      responsible_hr: { id: "b9b7ba70-783b-317e-9998-dc4dd82eb3f4", first_name: "Jane", last_name: "1116" },
      status: "IN_PREPARATION",
      title: "L2_ECON_1116_2019_05 pepe",
      type: "DEVELOPMENT_DISCUSSION"
    };

    this.set('item', item);

    // Template block usage:
    await render(hbs`{{conference-card item=item}}`);
    assert.equal(this.$('.content__title').text().trim(), item.title);
  });
});
