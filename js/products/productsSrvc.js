angular.module("myApp").service("productsSrvc", function($http) {
  this.getProducts = id =>
    $http
      .get(`https://practiceapi.devmountain.com/products?category=${id}`)
      .then(res => {
        return res.data;
      });
});
