import Service from '@ember/service';
import $ from 'jquery'

export default Service.extend({
  getConferences() {
    let response = $.getJSON(`/data/conferences.json`);
    return response;
  }
});
