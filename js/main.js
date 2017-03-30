$(document).ready(function() {

	//Mobile menu triggering system
	$('.xs-menu-trigger').click(function(){
		$(this).toggleClass('active');
		$('.xs-menu').slideToggle();
		$('.sub-menu').slideUp();
		$('.xs-menu ul li.active').removeClass('active');
	});

	$('.xs-menu ul li:has(ul) ul').addClass('sub-menu');

	$('.xs-menu ul li a .fa').click(function(){
		$(this).parent().parent().toggleClass('active');
		$('.sub-menu').slideToggle();
	});

	//Large search toggle
	$('.lg-search-trigger').click(function(e){
		e.preventDefault();
		$('.lg-search').fadeToggle();
		$('#lg-search-input').get(0).focus();
	});

	$(document).mouseup(function(e){
	    var container = $('.lg-search');
	    var canClose = $('.fa-close');

	    if (!container.is(e.target) 
	        && container.has(e.target).length === 0)
	    {	
	        container.fadeOut();
	    }
	    canClose.click(function(){
	    	container.fadeOut();
	    });
	});

	//Smooooooth anchor scrolling
  	$(function() {
  		$('a[href*="#"]:not([href="#"])').click(function() {
  			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  				var target = $(this.hash);
  				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  				if (target.length) {
  					$('html, body').animate({
  						scrollTop: target.offset().top
  					}, 1000,  "swing");
  					return false;
  				}
  			}
  		});
  	});

  	//Btt button slide in out
  	$(function() {
	    var header = $('.btt-button');
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();

	        if (scroll >= 300) {
	            header.addClass('scroll');
	        } else {
	            header.removeClass("scroll");
	        }
	    });
	});

	//Select list trigger
	$('.select-list-trigger').click(function(){
		$(this).next('.select-list').slideToggle();
		$(this).toggleClass('active');
		$(this).next('.select-list').find('.expanded-list-options').slideUp();
		$(this).next('.select-list').find('.show-more-list-items-trigger').removeClass('active');
	});

	$('.show-more-list-items-trigger').click(function(){
		$(this).toggleClass('active').prev('.expanded-list-options').slideToggle();
	});

	//Image Row List Slider
	$('.responsive').slick({
	  	dots: false,
	  	infinite: true,
	  	speed: 300,
	  	slidesToShow: 4,
	  	slidesToScroll: 4,
	  	responsive: [{
	      	breakpoint: 1024,
	      	settings: {
	        	slidesToShow: 3,
	        	slidesToScroll: 3,
	        	infinite: true,
	      	}
	    },
	    {
	    	breakpoint: 992,
	      	settings: {
	        	slidesToShow: 2,
	        	slidesToScroll: 2
	      	}
	    },
	    {
	    	breakpoint: 500,
	      	settings: {
	        	slidesToShow: 1,
	        	slidesToScroll: 1
	      	}
	    }]
	});

	//Hero Slider
	$('.hero-slider').slick({
	  	dots: true,
	  	infinite: true,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	autoplay: true,
  		autoplaySpeed: 6000,
  		arrows: true,
  		responsive: [{
	      	breakpoint: 500,
	      	settings: {
	      		arrows: false,
	      	}
	    }]
	});

});