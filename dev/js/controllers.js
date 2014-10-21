var nexusCtrl = angular.module('nexusCtrl', []);

nexusCtrl.controller('homeCtrl', ['$location', '$scope',
	function($location, $scope) {
		if ($(document).height() <= $(window).height())
			$(".my-footer").addClass("fix-footer-bottom");
		else
			$(".my-footer").removeClass("fix-footer-bottom");
}])
.controller('siteCtrl', ['$location', '$scope',
	function($location, $scope) {
		if ($(document).height() <= $(window).height())
			$(".my-footer").addClass("fix-footer-bottom");
		else
			$(".my-footer").removeClass("fix-footer-bottom");
		
		var bar = $('.nav').find('.menu > .bar-nav'),
				link = $('.nav').find('.menu > a');
		link.removeClass('active-btn');
		link.eq(1).addClass('active-btn');
		bar.css({
			'width': link.eq(1).innerWidth()+'px',
			'left': link.eq(1).position().left+'px'
		});
}]).controller('calcCtrl', ['$location', '$scope',
	function($location, $scope) {
//		if ($(document).height() <= $(window).height())
//			$(".my-footer").addClass("fix-footer-bottom");
//		else
		$(".my-footer").removeClass("fix-footer-bottom");
//		
//		var bar = $('.nav').find('.menu > .bar-nav'),
//				link = $('.nav').find('.menu > a');
//		link.removeClass('active-btn');
//		link.eq(1).addClass('active-btn');
//		bar.css({
//			'width': link.eq(1).innerWidth()+'px',
//			'left': link.eq(1).position().left+'px'
//		});
}]).controller('thirdCtrl', ['$location', '$scope',
	function($location, $scope) {
		if ($(document).height() <= $(window).height())
			$(".my-footer").addClass("fix-footer-bottom");
		else
			$(".my-footer").removeClass("fix-footer-bottom");
		var bar = $('.nav').find('.menu > .bar-nav'),
				link = $('.nav').find('.menu > a');
		link.removeClass('active-btn');
		link.eq(2).addClass('active-btn');
		bar.css({
			'width': link.eq(2).innerWidth()+'px',
			'left': link.eq(2).position().left+'px'
		});
}]).controller('applicationCtrl', ['$location', '$scope',
	function($location, $scope) {
		if ($(document).height() <= $(window).height())
			$(".my-footer").addClass("fix-footer-bottom");
		else
			$(".my-footer").removeClass("fix-footer-bottom");
		var bar = $('.nav').find('.menu > .bar-nav'),
				link = $('.nav').find('.menu > a');
		link.removeClass('active-btn');
		link.eq(3).addClass('active-btn');
		bar.css({
			'width': link.eq(3).innerWidth()+'px',
			'left': link.eq(3).position().left+'px'
		});
}])
.controller('aboutCtrl', ['$location', '$scope',
	function($location, $scope) {
		$scope.labels = ['Ваше имя', 'Ваш E-mail', 'Ваш номер (необязательно)'];
		$scope.social = [
			{
				id: 'twitter',
				xlink: '#twitter',
				url: '#',
			},
			{
				id: 'google',
				xlink: '#google',
				url: 'https://plus.google.com/u/0/116298012878227766967/about',
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

		if ($(document).height() <= $(window).height())
			$(".my-footer").addClass("fix-footer-bottom");
		else
			$(".my-footer").removeClass("fix-footer-bottom");
		var bar = $('.nav').find('.menu > .bar-nav'),
				link = $('.nav').find('.menu > a');
		link.removeClass('active-btn');
		link.eq(4).addClass('active-btn');
		bar.css({
			'width': link.eq(4).innerWidth()+'px',
			'left': link.eq(4).position().left+'px'
		});
}]);
