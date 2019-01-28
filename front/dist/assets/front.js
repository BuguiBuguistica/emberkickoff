'use strict';



;define("front/app", ["exports", "front/resolver", "ember-load-initializers", "front/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("front/components/conference-card", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    item: null
  });

  _exports.default = _default;
});
;define("front/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("front/controllers/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    name: "World",
    showName: false,
    numClicks: 0,
    actions: {
      toggleName() {
        this.toggleProperty('showName');
      },

      incrementClicks() {
        this.set('numClicks', this.get('numClicks') + 1);
      },

      doAlert(message = "hello") {
        window.alert('hey', message);
      }

    }
  });

  _exports.default = _default;
});
;define("front/controllers/conferences", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    show: true,
    actions: {
      alert: () => {
        window.alert('hello');
      }
    }
  });

  _exports.default = _default;
});
;define("front/controllers/people", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    param: '',
    peopleModel: Ember.computed('model', 'param', function () {
      const param = this.get('param');

      if (!param || param.length < 3) {
        return this.get('model');
      }

      return this.get('model').filter(person => person.first_name.toLowerCase().includes(param));
    }),
    actions: {
      onFilter(param) {
        this.set('param', param);
      }

    }
  });

  _exports.default = _default;
});
;define("front/helpers/app-version", ["exports", "front/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("front/helpers/is-after", ["exports", "ember-moment/helpers/is-after"], function (_exports, _isAfter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
;define("front/helpers/is-before", ["exports", "ember-moment/helpers/is-before"], function (_exports, _isBefore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
;define("front/helpers/is-between", ["exports", "ember-moment/helpers/is-between"], function (_exports, _isBetween) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
;define("front/helpers/is-same-or-after", ["exports", "ember-moment/helpers/is-same-or-after"], function (_exports, _isSameOrAfter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
;define("front/helpers/is-same-or-before", ["exports", "ember-moment/helpers/is-same-or-before"], function (_exports, _isSameOrBefore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
;define("front/helpers/is-same", ["exports", "ember-moment/helpers/is-same"], function (_exports, _isSame) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
;define("front/helpers/moment-add", ["exports", "ember-moment/helpers/moment-add"], function (_exports, _momentAdd) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
;define("front/helpers/moment-calendar", ["exports", "ember-moment/helpers/moment-calendar"], function (_exports, _momentCalendar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
;define("front/helpers/moment-diff", ["exports", "ember-moment/helpers/moment-diff"], function (_exports, _momentDiff) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
;define("front/helpers/moment-duration", ["exports", "ember-moment/helpers/moment-duration"], function (_exports, _momentDuration) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
;define("front/helpers/moment-format", ["exports", "ember-moment/helpers/moment-format"], function (_exports, _momentFormat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
;define("front/helpers/moment-from-now", ["exports", "ember-moment/helpers/moment-from-now"], function (_exports, _momentFromNow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
;define("front/helpers/moment-from", ["exports", "ember-moment/helpers/moment-from"], function (_exports, _momentFrom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
;define("front/helpers/moment-subtract", ["exports", "ember-moment/helpers/moment-subtract"], function (_exports, _momentSubtract) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
;define("front/helpers/moment-to-date", ["exports", "ember-moment/helpers/moment-to-date"], function (_exports, _momentToDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
;define("front/helpers/moment-to-now", ["exports", "ember-moment/helpers/moment-to-now"], function (_exports, _momentToNow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
;define("front/helpers/moment-to", ["exports", "ember-moment/helpers/moment-to"], function (_exports, _momentTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
;define("front/helpers/moment-unix", ["exports", "ember-moment/helpers/unix"], function (_exports, _unix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define("front/helpers/moment", ["exports", "ember-moment/helpers/moment"], function (_exports, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
;define("front/helpers/now", ["exports", "ember-moment/helpers/now"], function (_exports, _now) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
;define("front/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("front/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("front/helpers/unix", ["exports", "ember-moment/helpers/unix"], function (_exports, _unix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define("front/helpers/utc", ["exports", "ember-moment/helpers/utc"], function (_exports, _utc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(_exports, "utc", {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
;define("front/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "front/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("front/initializers/conferences", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize(application) {
    application.inject('route', 'conferenceService', 'service:conferenceService');
  }

  var _default = {
    name: 'conferenceService',
    initialize
  };
  _exports.default = _default;
});
;define("front/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("front/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("front/initializers/export-application-global", ["exports", "front/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("front/initializers/people", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize(application) {
    application.inject('route', 'peopleService', 'service:peopleService');
  }

  var _default = {
    initialize
  };
  _exports.default = _default;
});
;define("front/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("front/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("front/router", ["exports", "front/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('conferences', {
      path: '/'
    });
    this.route('peopleModel', {
      path: '/people/:term'
    });
    this.route('people');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("front/routes/conferences", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // import { inject as service } from '@ember/service';
  var _default = Ember.Route.extend({
    // Other way to inject service
    //conferenceService: service(),
    model() {
      return this.get('conferenceService').getConferences();
    }

  });

  _exports.default = _default;
});
;define("front/routes/people", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.get('peopleService').getPeople();
    },

    setupController(controller, model) {
      this._super(controller, model);
    }

  });

  _exports.default = _default;
});
;define("front/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("front/services/conference-service", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    getConferences() {
      let response = Ember.$.getJSON(`/data/conferences.json`);
      return response;
    }

  });

  _exports.default = _default;
});
;define("front/services/moment", ["exports", "ember-moment/services/moment", "front/config/environment"], function (_exports, _moment, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    get
  } = Ember;

  var _default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });

  _exports.default = _default;
});
;define("front/services/people-service", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    getPeople() {
      let response = Ember.$.getJSON(`/data/people.json`);
      return response;
    }

  });

  _exports.default = _default;
});
;define("front/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "WJexO8y/",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"wrapper\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"tabs\"],[9],[0,\"\\n    \"],[7,\"span\"],[9],[4,\"link-to\",[\"conferences\"],null,{\"statements\":[[0,\"Conference\"]],\"parameters\":[]},null],[10],[0,\"\\n    \"],[7,\"span\"],[9],[4,\"link-to\",[\"people\"],null,{\"statements\":[[0,\"People\"]],\"parameters\":[]},null],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[1,[21,\"outlet\"],false],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "front/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("front/templates/components/conference-card", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iPwgtECG",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\"],[11,\"class\",\"card\"],[9],[0,\"\\n  \"],[7,\"div\"],[9],[0,\"\\n    \"],[1,[23,[\"item\",\"title\"]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"card-wrapper\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card-column\"],[9],[7,\"b\"],[9],[0,\"Employee:\"],[10],[0,\" \"],[1,[23,[\"item\",\"number_of_employees\"]],false],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card-column\"],[9],[7,\"b\"],[9],[0,\"Date of conference:\"],[10],[0,\" \"],[1,[27,\"moment-format\",[[23,[\"item\",\"conference_date\"]],\"MM-DD-YYYY\"],null],false],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card-column\"],[9],[7,\"b\"],[9],[0,\"Head of conference:\"],[10],[0,\" \"],[1,[23,[\"item\",\"head_of_opc\",\"first_name\"]],false],[1,[23,[\"item\",\"head_of_opc\",\"last_name\"]],false],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card-column\"],[9],[7,\"b\"],[9],[0,\"Responsible HR BP:\"],[10],[0,\" \"],[1,[23,[\"item\",\"responsible_hr\",\"first_name\"]],false],[1,[23,[\"item\",\"responsible_hr\",\"last_name\"]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[14,1]],\"hasEval\":false}",
    "meta": {
      "moduleName": "front/templates/components/conference-card.hbs"
    }
  });

  _exports.default = _default;
});
;define("front/templates/conferences", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Fbo4lu7g",
    "block": "{\"symbols\":[\"conference\"],\"statements\":[[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"conference-card\",null,[[\"item\"],[[22,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "front/templates/conferences.hbs"
    }
  });

  _exports.default = _default;
});
;define("front/templates/people", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "8IvzLKKV",
    "block": "{\"symbols\":[\"person\"],\"statements\":[[7,\"div\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"filter\"],[9],[0,\"\\n    \"],[7,\"form\"],[11,\"action\",\"\"],[11,\"class\",\"form\"],[9],[0,\"\\n\\n    \"],[1,[27,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\",\"key-press\"],[\"text\",\"input\",\"Filter by name or lastname\",[23,[\"param\"]],[27,\"action\",[[22,0,[]],\"onFilter\"],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[4,\"each\",[[23,[\"peopleModel\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"card\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card-wrapper\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"card-column\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"role\",\"image\"],[11,\"class\",\"avatar avatar--l\"],[11,\"style\",\"background-image: url('https://cdn-assets-eu.frontify.com/local/haufe/h_lNxVXLqrDqb2kyrixW3lMmUl7n-aBRzJUzyvzD7_8ZT8-w0Kl7FiAgddIV6WDy68nPxqKzxRF8Pzgzru9UCWiiZwWIWu_LDbBg8OsRziRQvc1kALTy6-uAByAypdMH?width=800');\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"card-column\"],[9],[0,\"\\n        \"],[1,[22,1,[\"first_name\"]],false],[0,\" \"],[1,[22,1,[\"last_name\"]],false],[0,\" \"],[7,\"br\"],[9],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"card-highlight\"],[9],[4,\"if\",[[22,1,[\"placements\",\"0\"]]],null,{\"statements\":[[0,\" \"],[1,[22,1,[\"level\",\"name\"]],false],[0,\" .\\n          \"],[1,[22,1,[\"placements\",\"0\",\"position\",\"title\"]],false],[0,\" \"]],\"parameters\":[]},null],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"card-column\"],[9],[0,\"\\n        \"],[7,\"span\"],[9],[4,\"if\",[[22,1,[\"placements\",\"0\"]]],null,{\"statements\":[[0,\" \"],[1,[22,1,[\"placements\",\"0\",\"position\",\"department_abbreviation\"]],false],[0,\" \"]],\"parameters\":[]},null],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"card-column\"],[9],[0,\"\\n        \"],[7,\"span\"],[9],[1,[22,1,[\"primary_manager_identity\",\"first_name\"]],false],[0,\" \"],[1,[22,1,[\"primary_manager_identity\",\"last_name\"]],false],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "front/templates/people.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('front/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("front/app")["default"].create({"name":"front","version":"0.0.0+f451c065"});
          }
        
//# sourceMappingURL=front.map
