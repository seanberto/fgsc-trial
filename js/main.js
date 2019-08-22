$(document).ready(function() {





	// owl-carousel .js-owl-logo

	var owl1 = $('.js-owl-carousel-logo');
	owl1.owlCarousel({
			loop:true,
			margin:20,
			nav:false,
			smartSpeed: 1000,
			responsive:{
					0:{
							items:1,
							autoplay:true,
							autoplayTimeout:800,
							autoplayHoverPause:true
					},
					500:{
							items:2,
							autoplay:true,
							autoplayTimeout:800,
							autoplayHoverPause:true
					},
					768:{
							items:3,
							autoplay:true,
							autoplayTimeout:800,
							autoplayHoverPause:true
					},
					1200:{
							items:4,
							autoplay:false
					}
			}
	});



	// owl-carousel .js-owl-reviews

	var owl2 = $('.js-owl-carousel-reviews');
	owl2.owlCarousel({
			loop:true,
			margin:20,
			nav:false,
			smartSpeed:1000,
			items:1,
			autoplay:true,
			dotsContainer: '#carousel-custom-dots-reviews'
		});
		$('.owl-dot').click(function () {
			owl2.trigger('to.owl.carousel', [$(this).index(), 300]);
		});
		$('.js-reviews-btn-prev-1').click(function(event) {
			event.preventDefault();
			owl2.trigger('prev.owl.carousel');
		});
		$('.js-reviews-btn-next-1').click(function(event) {
			event.preventDefault();
			owl2.trigger('next.owl.carousel');
		});



	var spd = 100;
	var spdVal = 10;
	var cntDown = 5 * 60 * spdVal;
	setInterval(function() {
			var mn, sc, ms;
			cntDown--;
			if (cntDown < 0) {
					return false;
			}
			mn = Math.floor((cntDown / spdVal) / 60);
			mn = (mn < 10 ? '0' + mn : mn);
			sc = Math.floor((cntDown / spdVal) % 60);
			sc = (sc < 10 ? '0' + sc : sc);
			ms = Math.floor(cntDown % spdVal);
			ms = (ms < 10 ? '0' + ms : ms);
			var result = mn + ':' + sc + ':' + ms;
			document.getElementById('time').innerHTML = result;
	}, spd);

});


