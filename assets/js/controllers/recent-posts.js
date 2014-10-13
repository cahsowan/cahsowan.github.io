'use strict';

angular.module('cahsowan')
    .controller('RecentPostsCtrl', function($scope, $http, $rootScope){
        var limit = 5;
        $scope.myPromise = $http.get($rootScope.apiBaseUrl + '/api/posts', { params: {'limit': limit} })
            .success(function(data){
                $scope.recentPosts = data.posts;
            });
    })