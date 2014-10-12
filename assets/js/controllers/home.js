'use strict';

angular.module('cahsowan')
    .controller('HomeCtrl', function($scope, $http, $rootScope){
        $rootScope.pageTitle = $rootScope.defaultTitle;

        $scope.getPosts = function(page){
            var page = typeof page === "undefined" ? 1 : page;
            $http.get($rootScope.apiBaseUrl + '/api/posts', {params: {'page':page} }).success(function(data){
                $scope.posts = data.posts;                
                $scope.totalItems = data.pagination.total;
                $scope.perPage = data.pagination.limit;
            });
        }

        $scope.getPosts();

        $scope.haveNo = function(more){
            return typeof more === "undefined";
        }

        $scope.isPageable = function(totalItems, perPage){  return totalItems > perPage;}

        // PAGINATION
        $scope.currentPage = 1;
        $scope.maxSize = 5;

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function() {
            $scope.getPosts($scope.currentPage);
            scrollBodyTop(600);
        };
    })