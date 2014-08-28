/** PORTFOLIO GRID SELECTOR **/
$(function(){
	$('#portfolio-grid').mixitup({
	effects: ['fade','scale','grayscale']
	});
});


$(document).ready(function() {
	
	/** TOOLTIP **/
	$('.tooltips').tooltip({
		selector: "[data-toggle=tooltip]",
		container: "body"
	})
	
	/** SMOOTH SCROLL SELECTOR **/
	$('ul.scroll-nav a').smoothScroll({
		easing: 'swing',
		speed: 500
	});
	$('#back-top a').smoothScroll({
		easing: 'swing',
		speed: 500
	});
	
	/** PARALLAX **/
	$('#quote').parallax("50%", 0.05);
	$('#pricing-table').parallax("50%", 0.01);
	

	/** BACK TO TOP **/
	$("#back-top").hide();
	
	/** BACK TO TOP FADE IN **/
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
	});
	
});



/** CONTACT FORM VALIDATION **/
$(document).ready(function() {
	
	/** GENERATE SIMPLE CAPTCHA **/
	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};
	$('#SimpleCaptcha').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));
	
	/** CONTACT FORM SELECTOR **/
	$('#ContactForm').bootstrapValidator({
		message: 'This value is not valid',
		fields: {
			YourName: {
				validators: {
					notEmpty: {
						message: 'Your name is required and can\'t be empty'
					}
				}
			},
			YourEmail: {
				validators: {
					notEmpty: {
						message: 'The email address is required and can\'t be empty'
					},
					emailAddress: {
						message: 'The input is not a valid email address'
					}
				}
			},
			YourWebsite: {
				validators: {
					uri: {
						message: 'The input is not a valid URL'
					}
				}
			},
			YourMessage: {
				validators: {
					notEmpty: {
						message: 'Message is required and can\'t be empty'
					}
				}
			},
			captcha: {
				validators: {
					callback: {
						message: 'Wrong answer',
						callback: function(value, validator) {
							var items = $('#SimpleCaptcha').html().split(' '), sum = parseInt(items[0]) + parseInt(items[2]);
							return value == sum;
						}
					}
				}
			}
		}
	});
});