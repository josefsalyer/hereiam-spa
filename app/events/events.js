'use strict';

angular.module('hereiam.events', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/events', {
    templateUrl: 'events/events.html',
    controller: 'EventsController'
  });
}])

.controller('EventsController', [function() {

    var events = this;
    events.eventList = [
        {"_id": "d9dfaef4-cb1e-4d78-a231-6ccaf9386bdc", "Organizers": ["Frank Sinatra"], "Guests": ["Kimmy the Knife"]}
    ];

}]);
