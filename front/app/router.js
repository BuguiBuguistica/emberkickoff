import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
  this.route('conferences',  {path:'/'});
  this.route('people');
  this.route('styles-guide');
  this.route('book');
});

export default Router;
