$(document).ready(function() {
	$(window).load(function () {
		height2 = $('#carousel-example-generic .item').height();
                top2 = $('#menu').height();
		$('#gallery .textContent .text').css({
                    height: height2 - 2
		});	
                $('#gallery .textContent .text').css({
                    top: top2
		});	
	});
        $( window ).resize(function() {
            height2 = $('#carousel-example-generic .item').height();
                top2 = $('#menu').height();
		$('#gallery .textContent .text').css({
                    height: height2 - 2
		});	
                $('#gallery .textContent .text').css({
                    top: top2
		});
        });
}); 