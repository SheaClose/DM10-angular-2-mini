angular
  .module("myApp", ["ui.router"])
  .config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "./js/home/homeTmpl.html"
      })
      .state("settings", {
        url: "/settings",
        templateUrl: "./js/settings/settingsTmpl.html"
      })
      .state("products", {
        url: "/products/:id",
        templateUrl: "./js/products/productsTmpl.html",
        controller: "productsCtrl",
        resolve: {
          products(productsSrvc, $stateParams) {
            return productsSrvc.getProducts($stateParams.id);
          }
        }
      });
  });
