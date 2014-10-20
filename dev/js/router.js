nexusApp.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
//		$locationProvider.hashPrefix('!');
		$routeProvider.
			when('/home', {
				templateUrl: 'release/tpl/home.html',
				controller: 'homeCtrl'
			}).
			when('/site', {
				templateUrl: 'release/tpl/site.html',
				controller: 'siteCtrl'
			}).
			when('/3dgraphic', {
				templateUrl: 'release/tpl/third.html',
				controller: 'thirdCtrl'
			}).
			when('/application', {
				templateUrl: 'release/tpl/application.html',
				controller: 'applicationCtrl'
			}).
			when('/about', {
				templateUrl: 'release/tpl/about.html',
				controller: 'aboutCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]);