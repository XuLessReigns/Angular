angular.module("com.bj.shop.service",[])
    .service("searchService",function ($http,$q) {
        var url ="http://datainfo.duapp.com/shopdata/selectGoodes.php?selectText=%E8%A1%A3&callback=JSON_CALLBACK";

        /**
         * 根据搜素关键字获取商品列表
         * @param kw 关键字
         */

        this.getSearchList = function(kw){
            var defered = $q.defer();
            $http({
                url:url,
                method:"JSONP"
            }).success(function (data) {
                defered.resolve(data);
            }).error(function (data) {
                defered.reject(data);
            });

            return defered.promise;
        }
    });
