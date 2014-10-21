nexusApp.directive('myCalc', function() {
  return {
		restrict: 'E',
    templateUrl: '../release/tpl/my-calc.html',
		replace: true,
		controller: function($scope) {
			var hidden = [2,3,4,5,6,7,8,9],
			i, show, d, s,
			$inputD = $('input'),
			$labelD = $('label');

			for(i = 0; i < $inputD.length; i++) {
				d = parseFloat($inputD.eq(i).attr('data-discount'),10);
				if(d > 0) {
					$labelD.eq(i).append('<span> (Скидка '+(d *100)+'%)</span>');
				}
			}

			allHide(hidden);
			showBlock([2,6,8]);

			function showBlock(h) {
				var $b = $('.block');
				for(i = 0; i < h.length; i++) {
					h[i] = parseInt(h[i], 10);
					$b.eq(h[i]-1).addClass('show-block').removeClass('hide-block');
				}
			}

			function allHide(h) {
				var $b = $('.block');
				for(i = 0; i < h.length; i++) {
					h[i] = parseInt(h[i], 10);
					$b.eq(h[i]-1).addClass('hide-block').removeClass('show-block');
				}
			}

			$('input[name=type-radio]').on('click', function() {
				allHide(hidden);
				show = $(this).attr('data-num').split(',');
				showBlock(show);
				$('input[type=checkbox]:checked').removeAttr('checked');
			});

			$('input[name=case]').on('click', function() {
				$('.desc-help').removeClass('show-block');
				show = parseInt($(this).attr('data-num'), 10);
				$('.desc-help').eq(show).addClass('show-block');
			});

			$('#calculate').on('click', function() {
				var price = $('input:checked'),
						sum = 0, temp = 0, sumD = 0;

				for(i = 0; i < price.length; i++) {
					d = parseFloat(price.eq(i).attr('data-discount'), 10);
					s = parseInt(price.eq(i).val(), 10);

					if(d > 0.0000001) {
						sumD += s * d;
					}
					sum += parseInt(price.eq(i).val(), 10);
				}
				$('.block').eq(6).removeClass('hide-block').addClass('show-block');
				$('.sum').eq(0).html('Без скидки: '+sum);
				$('.sum').eq(1).html('Сумма скидки: '+sumD);
				$('.sum').eq(2).html('Итого: '+(sum-sumD)+' (без учета цены за хостинг)');
			});
		},
		link: function(scope, el, attr) {
			
		}
  };
});