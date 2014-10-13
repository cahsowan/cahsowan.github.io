'use strict';

angular.module('cahsowan')
    .controller('CategoriesTreeCtrl', function($scope, $http, $rootScope){
        $scope.myPromise = $http.get($rootScope.apiBaseUrl + '/api/categories').success(function(data){
            $scope.categories = data.categories;
        })
    })