'use strict';

angular.module('cahsowan')
    .directive('navbar', function(){
        return {
            restrict: 'E',
            templateUrl: 'navbar.html',
            controller: 'NavbarCtrl'
        };
    })