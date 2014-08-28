
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
	

	/** BACK TO TOP **/
	$("#back-top").hide();
	
	/** BACk TO TOP FADE IN **/
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
	});
	
	
	/** CONTACT FORM SELECTOR **/
	$('#CommentForm').bootstrapValidator({
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
			YourComment: {
				validators: {
					notEmpty: {
						message: 'Comment is required and can\'t be empty'
					}
				}
			}
		}
	});
	
	
});
