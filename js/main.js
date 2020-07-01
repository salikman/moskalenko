(function($) {
	"use strict";

	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(800).fadeOut();
	});
	// Btn nav collapse
	$('#nav .nav__collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

	});

	$('#home-slider').slick({
		arrows: false,
		dots: true,
		dotsClass: "dots dots-offset",
	});
	$('#reviews-slider').slick({
		dots: true,
		dotsClass: "dots dots-offset-m",
		adaptiveHeight: true,
		prevArrow:
		'<button class="btn-arrow btn-arrow-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow:
		'<button class="btn-arrow btn-arrow-next"><i class="fa fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					arrows: false
				}
			}
		]
	});

	
	//prevent duplicate in fancybox
	// $(document).find('.category__slider .slick-cloned a').removeAttr('data-fancybox');
	// slider category
	let num = $('.category');

	for (let i = 0; i < num.length; i++) {
		$('#category__slider-' + (i + 1)).slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			prevArrow:
			'<button class="btn-arrow btn-arrow-prev"><i class="fa fa-angle-left"></i></button>',
			nextArrow:
			'<button class="btn-arrow btn-arrow-next"><i class="fa fa-angle-right"></i></button>',
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 3,
						arrows: false,
						dots: true,
						dotsClass: "dots dots-offset-m",
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 2,
						arrows: false,
						dots: true,
						dotsClass: "dots dots-offset-m",
					}
				},
				{
					breakpoint: 531,
					settings: {
						slidesToShow: 1,
						arrows: false,
						dots: true,
						dotsClass: "dots dots-offset-m",
					}
				}
			]
		});
	}

	
})(jQuery);