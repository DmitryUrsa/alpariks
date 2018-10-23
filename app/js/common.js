$(function() {

    jQuery('.bugrer').click(function() {
        jQuery('.main-nav ul').slideToggle();
    });

    jQuery('#main-slider').slick();
    jQuery('#works-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    jQuery('#thanks-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        }]
    });

    jQuery('#reviews-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });

    var min = 0;
    var max = false;

    $('.quantity-down').on('click', decrement);
    $('.quantity-up').on('click', increment);

    function decrement() {
        input = $(this).next();
        var value = input.val();
        value--;
        if (value >= 0) {
            input.val(value);
        }
        $(input).trigger('change');
    }

    function increment() {
        input = $(this).prev();
        var value = input.val();
        value++;
        input.val(value);
        $(input).trigger('change');
    }

    $(".quantity-nubmer").bind('keyup mouseup change', function() {
        el = $(this);
        quantity = el.val();
        priceContainer = el.parent().parent();
        price = priceContainer.data('price');
        summaryContainer = priceContainer.parent().find('.table__cell_summary');
        summary = price * quantity;
        if(summary > 0) {
	        summaryContainer.text(summary + ' руб.');
	    } else {
	    	summaryContainer.text('-');
	    }

        sum = 0;
        $('.table__cell_summary').each(function() {
        	el = $(this);
        	parent = el.parent();
        	name = parent.find('.table__cell_name').text();
        	mark = parent.find('.table__cell_mk').html();
        	val = el.text();
        	val = parseInt(val);
        	if(!isNaN(val)) {
        		sum += val;
        		console.log(name + ' (' + quantity + '' + mark + ') - ' + val + ' руб.');
        	}
        	if(sum > 0) {
				$('.overall-sum__price').text(sum + ' руб.');
				$('.overall-sum').show();
			} else {
				$('.overall-sum__price').text('-');
				$('.overall-sum').hide();
			}
        });
    });


});