'use strict';

angular.module('cahsowan')
    .controller('CategoriesTreeCtrl', function($scope, $http, $rootScope){
        $http.get($rootScope.apiBaseUrl + '/api/categories').success(function(data){
            $scope.categories = data.categories;
        })
    })