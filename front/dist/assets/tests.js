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
  QUnit.test('initializers/conferences.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/conferences.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/conferences.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/conferences.js should pass ESLint\n\n');
  });
  QUnit.test('services/conference-service.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/conference-service.js should pass ESLint\n\n6:20 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)');
  });
});
define("front/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('front/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'front/templates/application.hbs should pass TemplateLint.\n\nfront/templates/application.hbs\n  26:10  error  you must use double quotes in templates  quotes\n  26:23  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('front/templates/components/conference-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'front/templates/components/conference-card.hbs should pass TemplateLint.\n\nfront/templates/components/conference-card.hbs\n  4:39  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('front/templates/conferences.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'front/templates/conferences.hbs should pass TemplateLint.\n\nfront/templates/conferences.hbs\n  1:2  error  Incorrect indentation for `{{#each}}` beginning at L1:C2. Expected `{{#each}}` to be at an indentation of 0, but was found at 2.  block-indentation\n');
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
  QUnit.test('unit/initializers/conferences-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/conferences-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/conferences-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/conferences-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/services/conference-service-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/conference-service-test.js should pass ESLint\n\n');
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
