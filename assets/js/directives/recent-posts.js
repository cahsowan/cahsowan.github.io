'use strict';

angular.module('cahsowan')
    .directive('recentPosts', function(){
        return {
            restrict: 'A',
            templateUrl: 'widgets/recent-posts.html',
            controller: 'RecentPostsCtrl'
        };
    })