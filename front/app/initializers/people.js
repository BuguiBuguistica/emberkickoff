export function initialize(application) {
  application.inject('route', 'peopleService', 'service:peopleService');
}

export default {
  initialize
};
