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
            controller: function ($scope, contactsFactory) {
                $scope.contacts = contactsFactory
            }
        })
        .state('contacts.details', {
            templateUrl: './templates/details.html',
            url: '/:id',
            controller: function ($scope, $stateParams, contactsFactory) {
                $scope.friends = contactsFactory.filter(x => x.name[0] == [$stateParams.id]);
            }
        });

    $urlRouterProvider.otherwise('/');
};

var app = angular.module('ContactsApp', ['ui.router']);
//version 1
app.factory('contactsFactory', function () {
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
        return this.contacts;
    })
    //verison 2
    //version 1
app.factory('contactsFactory2', function () {
    this.contacts = {
        get: function () {
            return [{
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
                ]
        }
    };
    return this.contacts;
});


app.config(configuration);