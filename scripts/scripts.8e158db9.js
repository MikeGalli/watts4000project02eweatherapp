"use strict";angular.module("watts4000project02eweatherappApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/current/:cityID",{templateUrl:"views/current.html",controller:"CurrentCtrl",controllerAs:"current"}).when("/forecast/:cityID",{templateUrl:"views/forecast.html",controller:"ForecastCtrl",controllerAs:"forecast"}).otherwise({redirectTo:"/"})}]),angular.module("watts4000project02eweatherappApp").controller("MainCtrl",["$scope","citysearch","$localStorage",function(a,b,c){a.citiesFound=b.find(),a.storage=c,a.findCities=function(){a.citiesFound=b.find({query:a.location}),a.searchQuery=a.location}}]),angular.module("watts4000project02eweatherappApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("watts4000project02eweatherappApp").factory("current",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=600ee3b60b8fe48d87def46be2f0e45f",{},{query:{method:"GET",params:{cityID:"4717560"},isArray:!1}})}]),angular.module("watts4000project02eweatherappApp").factory("citysearch",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=600ee3b60b8fe48d87def46be2f0e45f",{},{find:{method:"GET",params:{query:"seattle"},isArray:!1}})}]),angular.module("watts4000project02eweatherappApp").controller("CurrentCtrl",["$scope","$routeParams","current","$localStorage",function(a,b,c,d){a.cityID=b.cityID,a.currentWeather=c.query({cityID:b.cityID}),a.saveCity=function(b){var c={name:b.name,id:b.id,lat:b.lat,lon:b.lon};if(d.savedCities){for(var e=!0,f=0;f<d.savedCities.length;f++)d.savedCities[f].id===c.id&&(e=!1);e===!0?(d.savedCities.push(c),a.citySaved={success:!0}):(console.log("city already saved"),a.citySaved={duplicate:!0})}else d.savedCities=[c]}}]),angular.module("watts4000project02eweatherappApp").factory("forecast",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=5&units=imperial&APPID=600ee3b60b8fe48d87def46be2f0e45f",{},{query:{method:"GET",params:{cityID:"4717560"},isArray:!1}})}]),angular.module("watts4000project02eweatherappApp").controller("ForecastCtrl",["$scope","$routeParams","forecast","pics",function(a,b,c,d){a.cityID=b.cityID,a.forecastData=c.query({cityID:a.cityID}),a.getWeatherImage=function(a){var b="default.gif";return"Rain"===a?b=a:"Sunny"===a?b="sun.gif":"Snow"===a?b="snow.gif":"Clouds"===a&&(b="cloud.gif"),b},a.forecastData.$promise.then(function(b){a.pics=d.query({lat:b.city.coord.lat,lon:b.city.coord.lon,tags:b.list[3].weather.description})})}]),angular.module("watts4000project02eweatherappApp").factory("pics",["$resource",function(a){return a("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=35edbca3494716bac72f7f2719ccb167&tags=:tags&tag_mode=any&text=skyline&sort=relevance&lat=:lat&lon=:lon&radius=2&extras=url_l&format=json&nojsoncallback=1",{},{query:{method:"GET",params:{lat:"41.8781",lon:"-87.6298",tags:"Sunny"},isArray:!1}})}]),angular.module("watts4000project02eweatherappApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/current.html",'<p>This is the current view.</p> <h1>Current Weather for {{currentWeather.name}}</h1> <dl> <dt>Currently</dt> <dd>{{currentWeather.weather[0].main}}</dd> <dd>{{currentWeather.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{currentWeather.main.temp}} &deg;F</dd> <dt>Wind</dt> <dd>{{currentWeather.wind.speed}} mph at {{currentWeather.wind.deg}} &deg;</dd> <dt>Clouds</dt> <dd>{{currentWeather.clouds.all}}%</dd> </dl> <p><a ng-href="#/forecast/{{cityID}}" class="btn btn-lg btn-primary">View 16-day Forecast</a></p> <p><button class="btn btn-sm btn-primary" ng-click="saveCity(currentWeather)">Save City</button></p> <div ng-messages="citySaved"> <p class="city-saved-alert bg-success text-success" ng-message="success"> {{currentWeather.name}} has been saved to your list of cities. </p> <p class="city-saved-alert bg-warning text-warning" ng-message="duplicate"> {{currentWeather.name}} has already been saved to your list of cities. </p> </div>'),a.put("views/forecast.html",'<p>This is the forecast view.</p> <h1>5-day Forecast for {{forecastData.city.name}} {{forecastData.city.country}}</h1> <div id="forecast" class="container" style="width:100%"> <dl id="daily" class="col-sm-2" ng-repeat="prediction in forecastData.list" class="weather-forecast"> <dt><span class="smaller">Forecast for</span> {{prediction.dt*1000 | date:\'MMM dd, yyyy\'}}</dt> <!--Start Insert a gif into forecast  --> <dd class="icons"><img ng-src="images/{{getWeatherImage(prediction.weather[0].main)}}.gif" style="width:80px"></dd> <!--END Insert a gif into forecast  --> <dd>{{prediction.weather[0].main}}</dd> <dd>{{prediction.weather[0].description}}</dd> <dt>Temperature</dt> <dd>Min: {{prediction.temp.min}} &deg;F Max: {{prediction.temp.max}} &deg;F</dd> </dl> </div> <!--Start Flickr Photos//////////////////////////--> <div class="row marketing"> <div ng-controller="ForecastCtrl"> <h1>Weather for {{forecastData.city.name}}</h1> <div class="photos" ng-repeat="photo in pics.photos.photo"> <!--              Header?  var\n  --> <img ng-src="{{photo.url_l}}"> </div> </div> </div> <!--End Flickr Photos//////////////////////////--> <p><a ng-href="#/current/{{cityID}}" class="btn btn-lg btn-primary">View Current Weather</a></p>'),a.put("views/main.html",'<h3>This is main view</h3> <div ng-app class="jumbotron" ng-controller="MainCtrl"> <h1>Select Your City</h1> <p class="lead"> <div ng-init="location=\'Seattle\'"> <p> <label for="location">Location: <input type="text" name="location" ng-model="location"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="findCities()">Find City</button> </p> </div> <div ng-if="searchQuery"> <p class="lead">{{citiesFound.count}} cities found matching the query: {{searchQuery}}.</p> <dl ng-repeat="city in citiesFound.list"> <dt>{{city.name}}, {{city.sys.country}}</dt> <dd>{{city.weather[0].main}} - {{city.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{city.main.temp}} &deg;F</dd> <dd><a ng-href="#/current/{{city.id}}" class="btn btn-lg btn-primary">View Weather</a></dd> </dl> </div> </p> </div> <div id="savedCities" ng-if="storage.savedCities"> <h2>Saved Cities</h2> <ul class="saved-cities-list"> <li ng-repeat="city in storage.savedCities"> <a ng-href="#/current/{{city.id}}" class="btn btn-lg btn-primary">{{city.name}}</a> </li> </ul> </div> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> ')}]);