var serv =angular.module("com.bj.jshop.services",[]);
serv.service("ContentService", function(){
    this.getName = function(){
        return "ok"
    }
})
serv.service("PageManageService", function(){

    this.getList = function(){
        return 1;
    }

})