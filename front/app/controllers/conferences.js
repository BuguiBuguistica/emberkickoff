import Controller from '@ember/controller';

export default Controller.extend({
  show: true,
  actions: {
    alert: () => {
      window.alert('hello');
    }
  }
});
