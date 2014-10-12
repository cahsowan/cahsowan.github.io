'use strict';

angular.module('cahsowan')
    .controller('NavbarCtrl', function($scope, $http, $location, $rootScope){
        $http.get($rootScope.apiBaseUrl + '/api/categories').success(function(data){
            $scope.categories = data.categories;
        });

        $scope.doSearch = function(){
            $http.get($rootScope.apiBaseUrl + '/api/search', { params: {q: $scope.keyword} })
                .success(function(data){

                    if (data.posts.length < 1) {
                        $scope.showOverlay("No result found");    
                        $scope.keyword = "";
                    } else {
                        $location.path('/search').search({q: $scope.keyword});
                        $scope.keyword = "";
                    };
                })
                .error(function(data){
                    var message = $scope.formatErrorMessage(data.errors);
                    $scope.showOverlay(message);
                    $scope.keyword = "";
                });
        }

        $scope.formatErrorMessage = function(errors){
            var errorMessage = "<ul>";
            _.each(errors, function(v, k){
                errorMessage += "<li><strong>" + k + "</strong> " + v + "</li>"; 
            })
            errorMessage += "</ul>";

            return errorMessage;
        }
    })
