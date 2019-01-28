import Service from '@ember/service';

export default Service.extend({
  getPeople() {
    let response = Ember.$.getJSON(`/data/people.json`);
    return response;
  }
});
