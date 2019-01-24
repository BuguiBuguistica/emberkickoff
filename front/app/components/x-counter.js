import Component from '@ember/component';

export default Component.extend({
	number: 0,
	actions: {
		increment() {
			let number = this.get('number');
			this.set('number', number + 1);
		}
	}
});
