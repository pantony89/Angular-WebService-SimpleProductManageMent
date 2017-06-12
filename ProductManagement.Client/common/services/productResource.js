
(function () {
    "use strict";
    
    angular
        .module("common.services")
        .factory("productResource",
                ["$resource",
                 productResource]);

    function productResource($resource) {
        debugger;
        return $resource("/api/products/:productId")
    }

}());
