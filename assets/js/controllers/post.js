'use strict';

angular.module('cahsowan')
    .controller('PostCtrl', function($scope, $http, $routeParams, $rootScope){
        var postSlug = $routeParams.postSlug;
        $http.get($rootScope.apiBaseUrl + '/api/posts/' + postSlug).success(function(data){
            $scope.post = data.post;
            $scope.post.url = $rootScope.webBaseUrl + '/#!/posts/' + data.post.slug;
            $scope.contentLoaded = true;
            $rootScope.pageTitle = data.post.title + $rootScope.titleSuffix;
        });
    })