'use strict';

angular.module('cahsowan')
    .directive('categoriesTree', function(){
        return {
            restrict: 'A',
            templateUrl: 'widgets/categories-tree.html',
            controller: 'CategoriesTreeCtrl'
        }
    })