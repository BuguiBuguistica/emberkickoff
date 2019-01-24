import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		if(params.id === '1') {
			return {
				id: '1',
				description: 'record'
			}
		}
	}
});
