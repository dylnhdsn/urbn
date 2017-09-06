import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  queryParams: {
    category: { refreshModel: true },
    location: { refreshModel: true },
    radius: { refreshModel: true },
    sort: { refreshModel: true },
  },
  
  async model({ category, location, radius, sort }) {
    return await this.store.query('place', {
      filter: { category, location, radius },
      sort
    });
  }
});
