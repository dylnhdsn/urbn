export default function() {
  this.namespace = '/api/v1';
  this.get('/places', ({ places }, { queryParams }) => {
    let { 
      'filter[category]': category,
      'filter[location]': location,
      'filter[distance]': distance
    } = queryParams;
    return places.where({city: location})

  });
}
