nexusApp.directive('myFooter', function() {
  return {
		restrict: 'E',
    templateUrl: 'release/tpl/my-footer.html',
		replace: true,
		controller: function($scope) {
			$scope.social = [
//				{
//					id: 'twitter',
//					xlink: '#twitter',
//					url: '#',
//				},
				{
					id: 'google',
					xlink: '#google',
					url: 'https://plus.google.com/+NexusstudioRu31',
				},
				{
					id: 'facebook',
					xlink: '#facebook',
					url: 'https://www.facebook.com/nexus.studio.bel/timeline#',
				},
				{
					id: 'vk',
					xlink: '#vk',
					url: 'http://vk.com/nexusstudioru',
				},
				{
					id: 'youtube',
					xlink: '#youtube',
					url: 'http://www.youtube.com/channel/UCbWoURkJ5nXueJQjWpXEraA?guided_help_flow=3',
				}
			];
			$scope.copyrightYear = new Date().getTime();
		}
  };
});