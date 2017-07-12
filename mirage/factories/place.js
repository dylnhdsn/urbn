import { Factory, faker } from 'ember-cli-mirage';

const { 
  address: { streetAddress, city, stateAbbr, zipCode },
  company: { companyName },
  phone: { phoneNumber }
} = faker;

export default Factory.extend({
  name() {
    return companyName();
  },
  streetAddress() {
    return streetAddress();
  },
  city() {
    return city();
  },
  state() {
    return stateAbbr();
  },
  zipCode() {
    return zipCode();
  },
  phoneNumber() {
    return phoneNumber();
  },
  tweetIds() {
    let count = faker.random.number(10);
    let tweetIds = [];
    while (count > 0) {
      tweetIds.push(faker.random.uuid());
      count -= 1;
    }
    return tweetIds;
  }
});
