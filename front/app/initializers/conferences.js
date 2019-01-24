export function initialize(application) {
  application.inject('route', 'conferenceService', 'service:conferenceService');
}

export default {
  name: 'conferenceService',
  initialize
};
