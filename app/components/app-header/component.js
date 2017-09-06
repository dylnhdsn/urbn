import Ember from 'ember';

const { get, getProperties, inject: { service } } = Ember;

export default Ember.Component.extend({
  routing: service('-routing'),
  
  actions: {
    search() {
      const queryParams = getProperties(this, 'category', 'location', 'radius');
      get(this, 'routing.router').transitionTo('place', { queryParams });
    } 
  }
});
