import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('peopleService').getPeople();
  },
 /*  setupController(controller, model) {
    this._super(controller, model);
  }, */
});
