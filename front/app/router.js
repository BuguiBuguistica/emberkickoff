import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
  this.route('conferences',  {path:'/'});
  this.route('peopleModel', {path:'/people/:term'});
  this.route('people'); 
});

export default Router;
