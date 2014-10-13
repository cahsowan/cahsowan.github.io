'use strict';

angular.module('cahsowan')
    .controller('TagsCtrl', function($scope, $routeParams, $http, $rootScope){
        
        var tagName = $routeParams.tagName;
        $scope.getData = function(page){
            var page = typeof page === "undefined" ? 1 : page;

            $scope.myPromise = $http.get($rootScope.apiBaseUrl + '/api/tags/' + tagName + '/posts', {params: {'page': page}}).success(function(data){
                $scope.posts = data.posts;
                $scope.totalItems = data.pagination.total;
                $scope.perPage = data.pagination.limit;

                var tags = data.posts[0].tags;
                var realTag = _.filter(tags, function(tag){
                    return tag.slug == tagName
                })[0].name;

                $scope.tag = realTag;

                $rootScope.pageTitle = 'Tagged with: ' + $scope.tag + $rootScope.titleSuffix;
            });
        }

        $scope.getData();

        $scope.isPageable = function(totalItems, perPage){  return totalItems > perPage;}

        // PAGINATION
        $scope.currentPage = 1;
        $scope.maxSize = 5;

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function() {
            $scope.getData($scope.currentPage);
            scrollBodyTop(600);
        };
    })