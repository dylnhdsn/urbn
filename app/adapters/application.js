//import Ember from 'ember';
import DS from 'ember-data';
//import ENV from 'config';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({
  //namespace: 'api/v1',
  //host: 'https://urbn-api.c9.io'
  host: 'https://urbn-trend-dstn.c9users.io'
});