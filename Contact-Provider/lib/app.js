var configuration = function ($stateProvider, $urlRouterProvider, contactsProvider) {

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
            controller: function ($scope, contacts) {
                $scope.contacts = contacts;
            }
        })
        .state('contacts.details', {
            templateUrl: './templates/details.html',
            url: '/:id',
            controller: function ($scope, $stateParams, contacts) {
                $scope.friends = contacts.filter(x => x.name[0] == [$stateParams.id]);
            }
        });

    $urlRouterProvider.otherwise('/');
    contactsProvider.contacts.push({
        name: 'Tas',
        index: contactsProvider.contacts.length,
        phone: '-------'
    });
};

var app = angular.module('ContactsApp', ['ui.router']);

app.provider('contacts', function () {
    this.contacts = [{
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
                    }
                ];
    this.$get = function () {
        return this.contacts;
    };
});


app.config(configuration);