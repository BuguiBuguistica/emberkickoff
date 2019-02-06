import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    getBooks() {
      const result = this.store.peekAll('book');
      this.set('books', result);
    }
  }
});
