jQuery(document).ready(function($){

    // init functions
    smoothScroll();
    mobile_menu_toggle();


    // function smoothScroll(){
    //
    //     $(".icon-arrow-down").click(function() {
    //         $('html, body').animate({
    //             scrollTop: $("#sections-landingarea").offset().top
    //         }, 1000);
    //     });
    //
    // }


    function mobile_menu_toggle(){

        $(".nav-toggle").click(function() {
            $("aside.mobile-menu").stop().slideToggle(500);
        });

    }

    function smoothScroll(){

		$('a.smoothScroll').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		        || location.hostname == this.hostname) {

		        var target = $(this.hash);
		        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		           if (target.length) {
		             $('html,body').animate({
		                 scrollTop: target.offset().top
		            }, 1000);
		            return false;
		        }
		    }
		});

	}




});
