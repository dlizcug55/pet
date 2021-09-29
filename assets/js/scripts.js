$(document).ready(function() { 
    "use strict";


    // Mobile nav

    $('.mobile-toggle').click(function() {
        $(this).closest('nav').toggleClass('nav-open');
    });

    // Navbar Sticky

    (function() {
        var docElem = document.documentElement,
            didScroll = false,
            stickynav = 50;
            document.querySelector( '.nav-container' );
        function init() {
            window.addEventListener( 'scroll', function() {
                if( !didScroll ) {
                    didScroll = true;
                    setTimeout( scrollPage, 50 );
                }
            }, false );
        }
        
        function scrollPage() {
            var sy = scrollY();
            if ( sy >= stickynav ) {
                $( '.nav-container' ).addClass('sticky');
            }
            else {
                $( '.nav-container' ).removeClass('sticky');
            }
            didScroll = false;
        }
        
        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }        
        init();        
    })();
    // Owl Carousel Options

    $("#slider").owlCarousel({
 
    navigation : false,
    pagination: true,
    responsive: true,
    items: 1,
    touchDrag: true,
    navigationText: false,
    mouseDrag: true,
    itemsDesktop: [3000,1],
    itemsDesktopSmall: [1440,1],
    itemsTablet:[1024,1],
    itemsTabletSmall: [600,1],
    itemsMobile: [360,1],
    autoPlay: true,
    autoHeight: true
 
    });

    $("#slider2").owlCarousel({
 
    navigation : false,
    pagination: true,
    responsive: true,
    items: 1,
    touchDrag: true,
    navigationText: false,
    mouseDrag: true,
    itemsDesktop: [3000,1],
    itemsDesktopSmall: [1440,1],
    itemsTablet:[1024,1],
    itemsTabletSmall: [600,1],
    itemsMobile: [360,1],
    autoPlay: true,
    autoHeight: true
 
    });

    $("#slider3").owlCarousel({
 
    navigation : false,
    pagination: true,
    responsive: true,
    items: 1,
    touchDrag: true,
    navigationText: false,
    mouseDrag: true,
    itemsDesktop: [3000,1],
    itemsDesktopSmall: [1440,1],
    itemsTablet:[1024,1],
    itemsTabletSmall: [600,1],
    itemsMobile: [360,1],
    autoPlay: true,
    autoHeight: true
 
    });

});

$(document).ready(function(){
            
    "use strict";

//------------------------------------------------------------------------  
//                    MAGNIFIC POPUP(LIGHTBOX) SETTINGS
//------------------------------------------------------------------------  
              
    $('.portfolio-list li').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
      
//------------------------------------------------------------------------------------
//                      CONTACT FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------------------        
    $('#contact_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            name: "required",
            message: "required",
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        },
        messages: {
            name: "What's your name?",
            message: "Type your message",
            email: {
                required: "What's your email?",
                email: "Please, enter a valid email"
            }
        },
                    
        highlight: function(element) {
            $(element)
            .text('').addClass('error')
        },                    
                    
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    });   




//------------------------------------------------------------------------------------
//                              CONTACT FORM SCRIPT
//------------------------------------------------------------------------------------  
    
    $('#contact_form').submit(function() {
        // submit the form
        if($(this).valid()){
            $('#contact_submit').button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    contactname: $('#contact_name').val(),
                    contactemail: $('#contact_email').val(),
                    contactmessage: $('#contact_message').val()
                },
                success: function() {
                    $('#contact_submit').button('reset');
                    $('#modalContact').modal('hide');
                    
                    //Use modal popups to display messages
                    $('#modalMessage .modal-title').html('<i class="icon ion-ios-checkmark"></i>Well done!<br>Your message has been successfully sent!');
                    $('#modalMessage').modal('show');
                },
                error: function() {
                    $('#contact_submit').button('reset');
                    $('#modalContact').modal('hide');
                    
                    //Use modal popups to display messages
                    $('#modalMessage .modal-title').html('<i class="icon ion-ios-close"></i>Oops!<br>Something went wrong!');
                    $('#modalMessage').modal('show');
                }
            });
        } else {
            $('#contact_submit').button('reset')
        }
        return false; 
    });           

});
