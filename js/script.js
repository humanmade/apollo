(function ($) {
jQuery(document).ready(function(){

	// Navigation
    if ( jQuery(window).width() <= 768 ) {
        jQuery( '#header ul.menu' ).hide();
    }
	jQuery( '.site-navigation h1.assistive-text' ).click(function(e) {
        jQuery( '#header ul.menu' ).slideToggle();
    });

    // Add .parent class to appropriate menu items
    jQuery( 'ul.sub-menu' ).parent().addClass( 'parent' );

    jQuery( 'body' ).fitVids();

    // Fix the post box when scrolling
    var breakpoint  = 1200;
    var bh          = $( 'body' ).height();
    var wh          = $(window).height();
    var pbh         = $( '#postbox .postboxcontent' ).height();
    var pbw         = $( '#postbox' ).width();
    var pos         = $( '#postbox .postboxcontent' ).position();

    $(window).scroll(function() {
        // Only fix it in position if the window is wider than the layout breakpoint
        // and if the postbox is not taller than the window
        if ( jQuery( window ).width() > breakpoint && pbh < ( wh - 124 ) ) {

            var offset  = 0;
            var sticky  = false;
            var top     = $(window).scrollTop();
            var pbw     = $( '#postbox' ).width();

            if ( $( '#wrapper' ).offset().top < top + 120 ) {
                $( '#postbox .postboxcontent' ).addClass( 'fixed' );
                sticky = true;
            } else {
                $( '#postbox .postboxcontent' ).removeClass( 'fixed' );
            }

            $( '#postbox .postboxcontent' ).css( 'width', pbw );
        }

    });

    // Make sure the post textarea doesn't grow too tall
    if ( jQuery( window ).width() > breakpoint ) {
        var npbh    = wh - 400;
        jQuery( '#posttext' ).css({ "max-height": npbh + 'px' });
    }

    // Check the position / textarea height on window resize
    $(window).resize(function(){
        if ( jQuery( window ).width() > breakpoint ) {
            var pbw       = jQuery('#postbox').width();
            var wh        = jQuery( window ).height();
            var npbh      = wh - 400;
            jQuery( '#postbox .postboxcontent' ).css( 'width', pbw );
            jQuery( '#posttext' ).css({ "max-height": npbh + 'px' });
        } else {
            jQuery( '#postbox .postboxcontent' ).removeClass( 'fixed' ).removeAttr( 'style' );
        }
    });

    // Also scroll to top when postbox textarea is focused
    jQuery( '#postbox .inputarea textarea' ).focus(function () {
        jQuery( 'body,html' ).animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Hide the tag / submit inputs until the postbox label is clicked
    jQuery( '#postbox .inputs' ).hide();
    jQuery( '#post-prompt' ).click(function () {
        jQuery(this).toggleClass( 'active' );
        jQuery( '#postbox .inputs' ).slideToggle( "fast" );
        jQuery( '#posttext' ).focus();
        return false;
    });

});
jQuery(window).resize(function(){

    // Navigation
    if ( jQuery(window).width() > 768 ) {
        jQuery( '#header ul.menu' ).show();
    } else {
        jQuery( '#header ul.menu' ).hide();
    }

});
}(jQuery));