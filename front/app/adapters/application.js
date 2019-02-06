import DS from 'ember-data';
import $ from 'jquery'

// see documentation for jsonAdapter or restadapter, you can specify 
export default DS.Adapter.extend({
  findAll() {
    return $.getJSON(`/data/books.json`);
  }
});
