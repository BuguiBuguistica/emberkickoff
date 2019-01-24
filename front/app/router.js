import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
  /* this.route('abot');
  this.route('parent', function () {
  });
  this.route('parent.child', { path: 'parent/child' });
  this.route('todos', function () {
      this.route('show', { path: '/:id' });
  }); */
  this.route('conferences');
});

export default Router;
