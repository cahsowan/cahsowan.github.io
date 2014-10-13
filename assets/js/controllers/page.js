'use strict';

angular.module('cahsowan')
    .controller('PageCtrl', function($scope, $http, $routeParams, $rootScope){
        var pageSlug = $routeParams.pageSlug;
        $scope.myPromise = $http.get($rootScope.apiBaseUrl + '/api/pages/' + pageSlug).success(function(data){
            $scope.page = data.page;
            $rootScope.pageTitle = data.page.title + $rootScope.titleSuffix;
        });
    })