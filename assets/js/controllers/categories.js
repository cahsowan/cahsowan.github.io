'use strict';

angular.module('cahsowan')
    .controller('CategoriesCtrl', function($scope, $routeParams, $http, $rootScope){
        
        var categoryName = $routeParams.categoryName;
        $scope.getData = function(page){
            var page = typeof page === "undefined" ? 1 : page;

            $http.get($rootScope.apiBaseUrl + '/api/categories/' + categoryName + '/posts', {params: {'page': page}}).success(function(data){
                $scope.posts = data.posts;
                $scope.totalItems = data.pagination.total;
                $scope.perPage = data.pagination.limit;

                var categories = data.posts[0].categories;
                var realCat = _.filter(categories, function(cat){
                    return cat.slug == categoryName
                })[0].name;

                $scope.category = realCat;

                $rootScope.pageTitle = 'Category of: ' + $scope.category + $rootScope.titleSuffix;
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