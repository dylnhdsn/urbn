import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  async model({ location, distance, category }) {
    console.log(arguments)
    return await this.store.query('place', {
      filter: { location, distance, category }
    });
  }
});
