(function () {
    var app = angular.module("githubViewer", ["ui.router"]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/main");

        $stateProvider
            .state("main", {
                url: "/main",
                templateUrl: "main.html",
                controller: "MainController"
            })
            .state("user-details", {
                url: "/user/:username",
                templateUrl: "user.html",
                controller: "UserController"
            })
            .state("repo-details", {
                url: "/repo/:username/:reponame",
                templateUrl: "repo.html",
                controller: "RepoController"
        });
    });

} ());