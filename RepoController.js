(function () {
    var module = angular.module("githubViewer");

    var RepoController = function ($scope, $stateParams, github) {
        var username = $stateParams.username;
        var reponame = $stateParams.reponame;

        var onRepo = function (data) {
            $scope.repo = data;
        };

        var onError = function (reason) {
            $scope.error = reason;
        }

        github.getRepoDetails(username, reponame)
            .then(onRepo, onError);
    }

    module.controller("RepoController", RepoController);
}());