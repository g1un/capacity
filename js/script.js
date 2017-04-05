$(document).ready(function() {

	//slider
	(function() {

		//cache Dom
		var $window = $(window);
		var $slider = $('.js-slider');

		runSlick();

		//getOptions
		function getOptions($slider) {
			var slide = '#' + $slider.getAttribute('id') + ' .js-slider-item';
			var slidesToShow = $slider.getAttribute('data-slides');
			var slidesToShowSm = $slider.getAttribute('data-slides-sm');
			var dots = $slider.getAttribute('data-dots');

			return {
				slide: slide,
				slidesToShow: slidesToShow ? slidesToShow : '1',
				dots: dots ? dots : true,
				arrows: false,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: slidesToShowSm ? slidesToShowSm : '1'
						}
					}
				]
			};
		}

		//run slick
		function runSlick() {
			for(var i = 0; i < $slider.length; i++) {
				$($slider[i]).slick(getOptions($slider[i]));
			}
		}
	})();
});