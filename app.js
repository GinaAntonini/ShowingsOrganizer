var app = angular.module("ShowingsOrganizer", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "/app/partials/index.html",
        controller: "HomeController"
    });
 }]);