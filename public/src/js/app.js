var modules=[
  'ngRoute'
];
var app=angular.module('quizbuzz',modules);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "views/home.html"
  })
  .when("/home", {
    templateUrl : "views/home.html"
  })
  .when("/puzzle", {
    templateUrl : "views/puzzlehome.html"
  })
  .when("/puzzle:id", {
    templateUrl : "views/puzzle.html"
  })
  .when("/createpuzzle", {
    templateUrl : "views/createpuzzle.html"
  })
  .when("/contactus", {
    templateUrl : "views/contactus.html"
  })
  .when("/createquiz", {
    templateUrl : "views/createquizz.html"
  })
  .when("/quiz", {
    templateUrl : "views/quizshow.html"
  })
  .when("/quiz:id", {
    templateUrl : "views/quizz.html"
  });
});
