var configuration = function ($stateProvider, $urlRouterProvider, contacts) {

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
                $scope.contacts = contacts
            }
        })
        .state('contacts.details', {
            templateUrl: './templates/details.html',
            url: '/:id',
            controller: function ($scope, $stateParams, contacts) {
                $scope.friends = contacts.filter(x => x.name[0] == [$stateParams.id]);
            }
        });
   // contacts.push({
  //        name: "Tas D.",
  //        id: contacts.length, 
  //        phone: 'n/a' 
  //    });

    $urlRouterProvider.otherwise('/');
};

var app = angular.module('ContactsApp', ['ui.router']);
app.constant('contacts', [
    {
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
                ]);
app.value('JohnDoe', {
    name: "John",
    id: -1,
    phone: '011923500877'
});

app.config(configuration);