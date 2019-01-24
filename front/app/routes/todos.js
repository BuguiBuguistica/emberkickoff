import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return [
			{
				id: '1',
				description: 'Records'
			},
			{
				id: '2',
				description: 'Aalalal'
			}
		]
	}
});
