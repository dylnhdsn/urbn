import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  name: attr('string'),
  streetAddress: attr('string'),
  city: attr('string'),
  state: attr('string'),
  zipCode: attr('string'),
  phoneNumber: attr('string'),
  tweetIds: attr(),
});
