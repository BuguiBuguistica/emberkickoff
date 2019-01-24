import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';

export default Route.extend({
  // Other way to inject service
  //conferenceService: service(),
  model() {
    return this.get('conferenceService').getConferences();
  }
});
