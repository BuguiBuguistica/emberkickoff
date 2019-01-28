import Controller from '@ember/controller';

export default Controller.extend({
  param: '',
  peopleModel: Ember.computed('model', 'param', function() {
    const param = this.get('param');
    if(!param || param.length < 3) {
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
