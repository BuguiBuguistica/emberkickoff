import Service from '@ember/service';
import $ from 'jquery'

export default Service.extend({
  getPeople() {
    let response = $.getJSON(`/data/people.json`);
    return response;
  }
});
