'use strict';

define("front/tests/integration/components/conference-card-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | conference-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "iOFKiKbE",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"conference-card\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "NMLej1jP",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"conference-card\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("front/tests/integration/components/x-alert-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | x-alert', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "qqPW/gNE",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"x-alert\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "JMdyujq4",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"x-alert\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("front/tests/integration/components/x-counter-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | x-counter', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "quC+NXYA",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"x-counter\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "nUama9vs",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"x-counter\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("front/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/conference-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/conference-card.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/conferences.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/conferences.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/people.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/people.js should pass ESLint\n\n5:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n5:16 - \'Ember\' is not defined. (no-undef)');
  });
  QUnit.test('initializers/conferences.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/conferences.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/people.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/people.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass ESLint\n\n11:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)');
  });
  QUnit.test('routes/conferences.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/conferences.js should pass ESLint\n\n');
  });
  QUnit.test('routes/people.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/people.js should pass ESLint\n\n');
  });
  QUnit.test('services/conference-service.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/conference-service.js should pass ESLint\n\n6:20 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)');
  });
  QUnit.test('services/people-service.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/people-service.js should pass ESLint\n\n5:20 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n5:20 - \'Ember\' is not defined. (no-undef)');
  });
});
define("front/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('front/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'front/templates/application.hbs should pass TemplateLint.\n\nfront/templates/application.hbs\n  3:20  error  you must use double quotes in templates  quotes\n  3:33  error  you must use double quotes in templates  quotes\n  4:20  error  you must use double quotes in templates  quotes\n  4:29  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('front/templates/components/conference-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'front/templates/components/conference-card.hbs should pass TemplateLint.\n\nfront/templates/components/conference-card.hbs\n  7:93  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('front/templates/conferences.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'front/templates/conferences.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('front/templates/people.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'front/templates/people.hbs should pass TemplateLint.\n\nfront/templates/people.hbs\n  5:4  error  Incorrect indentation for `{{input}}` beginning at L5:C4. Expected `{{input}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  10:2  error  Incorrect indentation for `<div>` beginning at L10:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  18:65  error  Incorrect indentation for `span` beginning at L17:C8. Expected `</span>` ending at L18:C65 to be at an indentation of 8 but was found at 58.  block-indentation\n  17:37  error  Incorrect indentation for `{{#if}}` beginning at L17:C37. Expected `{{#if}}` to be at an indentation of 10 but was found at 37.  block-indentation\n  18:58  error  Incorrect indentation for `if` beginning at L17:C37. Expected `{{/if}}` ending at L18:C58 to be at an indentation of 37 but was found at 51.  block-indentation\n  17:67  error  Incorrect indentation for `{{person.level.name}}` beginning at L17:C67. Expected `{{person.level.name}}` to be at an indentation of 39 but was found at 67.  block-indentation\n  18:10  error  Incorrect indentation for `{{person.placements.0.position.title}}` beginning at L18:C10. Expected `{{person.placements.0.position.title}}` to be at an indentation of 39 but was found at 10.  block-indentation\n  13:52  error  elements cannot have inline styles  no-inline-styles\n');
  });
});
define("front/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/conference-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/conference-card-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/x-alert-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-alert-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/x-counter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-counter-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/conferences-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/conferences-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/people-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/people-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/initializers/conferences-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/conferences-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/initializers/people-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/people-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/conferences-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/conferences-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/people-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/people-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/services/conference-service-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/conference-service-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/services/people-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/people-test.js should pass ESLint\n\n');
  });
});
define("front/tests/test-helper", ["front/app", "front/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("front/tests/unit/controllers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define("front/tests/unit/controllers/conferences-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | conferences', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:conferences');
      assert.ok(controller);
    });
  });
});
define("front/tests/unit/controllers/people-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | people', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:people');
      assert.ok(controller);
    });
  });
});
define("front/tests/unit/initializers/conferences-test", ["front/initializers/conferences", "qunit", "ember-qunit"], function (_conferences, _qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Initializer | conferences', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    hooks.beforeEach(function () {
      this.TestApplication = Ember.Application.extend();
      this.TestApplication.initializer({
        name: 'initializer under test',
        initialize: _conferences.initialize
      });
      this.application = this.TestApplication.create({
        autoboot: false
      });
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    }); // Replace this with your real tests.

    (0, _qunit.test)('it works', async function (assert) {
      await this.application.boot();
      assert.ok(true);
    });
  });
});
define("front/tests/unit/initializers/people-test", ["front/initializers/people", "qunit", "ember-qunit"], function (_people, _qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Initializer | people', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    hooks.beforeEach(function () {
      this.TestApplication = Ember.Application.extend();
      this.TestApplication.initializer({
        name: 'initializer under test',
        initialize: _people.initialize
      });
      this.application = this.TestApplication.create({
        autoboot: false
      });
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    }); // Replace this with your real tests.

    (0, _qunit.test)('it works', async function (assert) {
      await this.application.boot();
      assert.ok(true);
    });
  });
});
define("front/tests/unit/routes/conferences-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | conferences', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:conferences');
      assert.ok(route);
    });
  });
});
define("front/tests/unit/routes/people-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | people', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:people');
      assert.ok(route);
    });
  });
});
define("front/tests/unit/services/conference-service-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | conference-service', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:conference-service');
      assert.ok(service);
    });
  });
});
define("front/tests/unit/services/people-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | people', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:people');
      assert.ok(service);
    });
  });
});
define('front/config/environment', [], function() {
  var prefix = 'front';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('front/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
