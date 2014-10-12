'use strict';

angular.module('cahsowan')
    .directive('popularTags', function(){
        return {
            restrict: 'A',
            templateUrl: 'widgets/popular-tags.html',
            controller: 'PopularTagsCtrl'
        }
    })