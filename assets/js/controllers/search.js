'use strict';

angular.module('cahsowan')
    .controller('SearchCtrl', function($scope, $http, $routeParams, $rootScope){
        $scope.keyword = $routeParams.q;
        
        $scope.getData = function(page){
            var page = typeof page === "undefined" ? 1 : page;
            $scope.myPromise = $http.get($rootScope.apiBaseUrl + '/api/search', { params: {q: $scope.keyword} })
                .success(function(data){
                    $scope.posts = data.posts;
                    $scope.totalItems = data.pagination.total;
                    $scope.perPage = data.pagination.limit;

                    $rootScope.pageTitle = 'Search for: ' + $scope.keyword + $rootScope.titleSuffix;
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