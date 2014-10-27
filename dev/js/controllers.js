var nexusCtrl = angular.module('nexusCtrl', []);

nexusCtrl.controller('homeCtrl', ['$location', '$scope',
	function($location, $scope) {
			if ($(document).height() <= $(window).height()){
				$(".my-footer").addClass("fix-footer-bottom");
			}else{
				$(".my-footer").removeClass("fix-footer-bottom");
			}
}])
.controller('siteCtrl', ['$location', '$scope',
		function($location, $scope) {
			if ($(document).height() <= $(window).height()){
				$(".my-footer").addClass("fix-footer-bottom");
			}else{
				$(".my-footer").removeClass("fix-footer-bottom");
			}
		
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
		$(".my-footer").removeClass("fix-footer-bottom");
}]).controller('thirdCtrl', ['$location', '$scope',
		function($location, $scope) {
			if ($(document).height() <= $(window).height()){
				$(".my-footer").addClass("fix-footer-bottom");
			}else{
				$(".my-footer").removeClass("fix-footer-bottom");
			}
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
			if ($(document).height() <= $(window).height()){
				$(".my-footer").addClass("fix-footer-bottom");
			}else{
				$(".my-footer").removeClass("fix-footer-bottom");
			}
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
			if ($(document).height() <= $(window).height()){
				$(".my-footer").addClass("fix-footer-bottom");
			}else{
				$(".my-footer").removeClass("fix-footer-bottom");
			}
		$scope.data = {
			social: [
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
			],
			labels: [
				{
					lbl: 'Ваше имя (обязательно)',
					name: 'name'
				},
				{
					lbl: 'Ваш E-mail (обязательно)',
					name: 'mail'
				},
				{
					lbl: 'Ваш номер (необязательно)',
					name: 'phone'
				},
			]
		};

		var bar = $('.nav').find('.menu > .bar-nav'),
				link = $('.nav').find('.menu > a');
		link.removeClass('active-btn');
		link.eq(4).addClass('active-btn');
		bar.css({
			'width': link.eq(4).innerWidth()+'px',
			'left': link.eq(4).position().left+'px'
		});
		
		$('#send-mail').on('click', function() {
			var name = $('input[name=name]').val(),
					mail = $('input[name=mail]').val(),
					text = $('textarea[name=text]').val();
			if(name != '' && mail != '' && text != '') {
				var q = $('#form-send-mail').serialize();
				$.ajax({
					type: "GET",
					url: "release/php/mail.php",
					data: q
				})
				.done(function( data ) {
					alert( data );
				});
			} else {
				alert('Заполните все обязательные поля!');
			}
		});
}]);
