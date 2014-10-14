'use strict';

angular.module('cahsowan')
    .controller('PopularTagsCtrl', function($scope, $http, $rootScope){
        var maxFontSize = 26,
            minFontSize = 14,
            fontSpread = maxFontSize - minFontSize;

        $scope.myPromise = $http.get($rootScope.apiBaseUrl + '/api/tags').success(function(data){
            // maybe we need to apply filter for minimum post_count number

            var max = _.max(data.tags, function(tag){ return tag.post_count }).post_count,
                min = _.min(data.tags, function(tag){ return tag.post_count }).post_count,
                spread = max - min,
                step = fontSpread / spread;

            var tags = _.each(data.tags, function(tag){
                tag.font_size = minFontSize + (tag.post_count - min) * step;
            });

            $scope.tags = tags;
        })

        $scope.setFontSize = function(fontSize){
            return {'font-size': fontSize + 'px'}; 
        }
    })