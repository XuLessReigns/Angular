angular.module("com.bj.shop.controller",[])
    .controller("searchController",["$scope","searchService",function (s,ss) {
        s.search = function () {
            ss.getSearchList("")
                .then(function (data) {
                    //console.log(data);
                    s.productList = data;
                })
        }
    }]);
