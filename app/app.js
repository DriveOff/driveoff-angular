'use strict';


var Nav = angular.module('Nav', []);

//Main wil be my ng-app.  Nav will be a module injected into it
var Main = angular.module('Main', ['ui.router', 'ngAnimate', 'mm.foundation', 'ngSanitize', 'ngStorage', 'Nav']);

//The controller needs the array of dependencies