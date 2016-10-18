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
                $scope.contacts = contactsService.contacts;
            }
        })
        .state('contacts.details', {
            templateUrl: './templates/details.html',
            url: '/:id',
            controller: function ($scope, $stateParams, contactsService) {
                $scope.friends = contactsService.contacts.length > 0 ? contactsService.contacts.filter(x => x.name[0] == [$stateParams.id]) : {};
            }
        });

    $urlRouterProvider.otherwise('/');
};

var app = angular.module('ContactsApp', ['ui.router']);

app.service('contactsService', function ($window) {
    this.contacts = [];
    $window.setTimeout(() => {
        this.contacts.push({
                name: "Alice J",
                id: 0,
                phone: '613.222.000'
                    });
        this.contacts.push({
                name: "Ali M",
                id: 1,
                phone: '613.333.000'
                    });
       this.contacts.push({
                name: "John",
                id: 2,
                phone: '+91.3500877'
                    });
       this.contacts.push({
                name: "Jane",
                id: 3,
                phone: '(011)-93.3500877'
                    });
        console.log("Now returning the contacts.", this.contacts);
    }, 2000);
});


app.config(configuration);