var serv = angular.module("com.bj.jshop.services",[]);
serv.service("contentService",function () {
    this.getName = function () {
        return "ok";
    }
});
serv.service("pageManageService",function () {
    this.getList = function () {
        return 1;
    }
});