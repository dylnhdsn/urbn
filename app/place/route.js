import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  async model() {
    return await this.store.findAll('place');
  }
});
