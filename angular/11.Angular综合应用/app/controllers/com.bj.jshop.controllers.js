var ctrl = angular.module("com.bj.jshop.controllers",[]);

ctrl.controller("contentController",function ($scope,contentService) {
    console.log(contentService.getName());
});
ctrl.controller("pageManageController",function ($scope,pageManageService) {
    console.log(pageManageService.getList());
});