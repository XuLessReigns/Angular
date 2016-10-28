var ctrl = angular.module("com.bj.jshop.controllers",[]);
ctrl.controller("ContentController",
    function($scope,ContentService){

        console.log(ContentService.getName());
});
ctrl.controller("PageManageController",
    function($scope,PageManageService){
    console.log(PageManageService.getName());
});