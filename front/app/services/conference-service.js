import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
  getConferences() {
    let response = Ember.$.getJSON(`/data/conferences.json`);
    return response;
  }
});
