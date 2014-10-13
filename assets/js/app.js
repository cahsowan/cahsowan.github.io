'use strict';

angular.module('cahsowan', ['ngRoute', 'ngSanitize', 'ui.bootstrap'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            })
            .when('/categories/:categoryName', {
                templateUrl: 'categories.html',
                controller: 'CategoriesCtrl'
            })
            .when('/tags/:tagName', {
                templateUrl: 'tags.html',
                controller: 'TagsCtrl'
            })
            .when('/posts/:postSlug', {
                templateUrl: 'post.html',
                controller: 'PostCtrl'
            })
            .when('/pages/:pageSlug', {
                templateUrl: 'page.html',
                controller: 'PageCtrl'
            })
            .when('/search', {
                templateUrl: 'search.html',
                controller: 'SearchCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })

        // WE DO THIS BECAUS OF DISQUS RULE
        $locationProvider.html5Mode(false).hashPrefix("!");
    })

    .run(function($rootScope, $modal, $location, $window){
        $rootScope.apiBaseUrl = 'http://cahsowanblog.gopagoda.com';
        $rootScope.webBaseUrl = $window.location.origin;

        // Page title changed on every path changes
        $rootScope.defaultTitle = 'Taufik Rahman &raquo; Ikatlah ilmu dengan menulisnya';
        $rootScope.titleSuffix = ' | Taufik Rahman &raquo; Ikatlah ilmu dengan menulisnya';
        $rootScope.pageTitle = $rootScope.defaultTitle;

        // always scroll body up when path changed
        $rootScope.$on( "$routeChangeStart", function(event, next, current) {
            scrollBodyTop(600);
        });

        // ga = GOGLE ANALYTIC
        $rootScope.$on('$viewContentLoaded', function(event) {
            $window.ga('send', 'pageview', { page: $location.path() });
        });

        $rootScope.showOverlay = function(message) {
            $rootScope.message = message;
            $modal.open({
                templateUrl: 'overlay.html',
                controller: function($scope, $modalInstance){
                    $scope.cancel = function (){
                        $modalInstance.dismiss('cancel');
                    }
                }
            });
        }
    })

// WINDOW SCROLL HELPER
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

$('.scrollup').click(function () {
    scrollBodyTop(600)
    return false;
});

function scrollBodyTop(interval){
    $("html, body").animate({
        scrollTop: 0
    }, interval);
}