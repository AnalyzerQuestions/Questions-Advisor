/**
 * @ngdoc router
 * @name Route Provide
 *
 * @description
 * This is the aqtApp router. It is the major route.
 *
 * @author <a href="https://github.com/FranckAJ">Franck Aragão</a>
 **/
angular.module("aqtApp").config(function($routeProvider) {

    $routeProvider.when("/main", {
        templateUrl: './main.html',
        controller: 'mainController as mainCtrl'

    }).when("/blank", {
        templateUrl: './blank.html'

    }).when("/", {
        templateUrl: './login.html',
        controller: 'loginController as loginCtrl'

    }).when("/new", {
        templateUrl: './new-question.html',
        controller: 'newQuestionController as nqCtrl'

    }).otherwise({
        redirectTo: '/'
    });
});
