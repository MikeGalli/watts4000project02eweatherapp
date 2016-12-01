'use strict';

/**
 * @ngdoc service
 * @name watts4000project02eweatherappApp.pics
 * @description
 * # pics
 * Factory in the watts4000project02eweatherappApp.
 */
angular.module('watts4000project02eweatherappApp')
.factory('pics', function ($resource) {
  // Service logic
  // ...
////////////////////https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=35edbca3494716bac72f7f2719ccb167&tags=:Sunny&tag_mode=any&text=skyline&sort=relevance&lat=41.8781&lon=-87.6298&radius=2&extras=url_l&format=json&nojsoncallback=1
  // Public API here
  return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=35edbca3494716bac72f7f2719ccb167&tags=:tags&tag_mode=any&text=skyline&sort=relevance&lat=:lat&lon=:lon&radius=2&extras=url_l&format=json&nojsoncallback=1', {}, {
    query: {
      method:'GET',
      params:{
        lat: '41.8781',
        lon: '-87.6298',
        tags: 'Sunny'
      },
      isArray:false
    }
  });
});
