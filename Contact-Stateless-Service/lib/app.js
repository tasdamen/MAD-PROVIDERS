var configuration = function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                template: '<p>My Home.</p>',

            })
            .state('about', {
                url: '/about-us',
                template: '<p>A little about us.</p>'
            })
            .state('contacts', {
                templateUrl: './templates/contacts.html',
                url: '/contacts',
                controller: function ($scope, contactsService) {
                    contactsService.get().then(data => {
                        $scope.contacts = data;
                    });
                }
            })
            .state('contacts.details', {
                    templateUrl: './templates/details.html',
                    url: '/:id',
                    controller: function ($scope, $stateParams, contactsService) {
                        contactsService.get().then(data => {
                                $scope.friends = data.filter(x => x.name[0] == [$stateParams.id]);
                            });
                        }
                    });

                $urlRouterProvider.otherwise('/');
            };

        var app = angular.module('ContactsApp', ['ui.router']);

        app.service('contactsService', function ($q, $window) {
            this.get = function () {
                var deferred = $q.defer();
                $window.setTimeout(() => {
                    deferred.resolve(

        [{
                                name: "Alice J",
                                id: 0,
                                phone: '613.222.000'
                    },
                            {
                                name: "Ali M",
                                id: 1,
                                phone: '613.333.000'
                    },
                            {
                                name: "John",
                                id: 2,
                                phone: '+91.3500877'
                    },
                            {
                                name: "Jane",
                                id: 3,
                                phone: '(011)-93.3500877'
                    }])
                }, 2000);

                return deferred.promise;
            }
        });


        app.config(configuration);