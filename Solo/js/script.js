/*=================================
            Preloader
=================================*/

//Select browser window and monitors loading event.
//Ensures that whole site is loaded.
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
}); 


/*=================================
            Team
=================================*/

$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class = "fa fa-angle-left"></i>',
            '<i class = "fa fa-angle-right"></i>'],
        responsive: {
            //Breakpoint from 0 up
            0: {
                items: 1
            },
            //Breakpont from 480 up
            480: {
                items: 2
            }
        }
    });
});


/*=================================
            Progress Bars
=================================*/

$(function () {

    $("#progress-elements").waypoint(function () {

        //alert("You arrived at Progress Elements area");
        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
    });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});


/*=================================
            Responsive Tabs
=================================*/

$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});


/*=================================
           Portfolio / Work
=================================*/

$(window).on('load', function () {

    // Initialize Isotope Plugin
    $("#isotope-container").isotope({

    });

    // Filter items on button click
    $("#isotope-filters").on('click', 'button', function () {


        // Filter Portfolio
        var filterVal = $(this).attr('data-filter');

        $("#isotope-container").isotope({
            filter: filterVal
        });

        // Active Button

        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');

    });
}); 

/*=================================
            Magnifier
=================================*/

$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/*=================================
            Testimonials
=================================*/

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class = "fa fa-angle-left"></i>',
            '<i class = "fa fa-angle-right"></i>']
    });
});

/*=================================
            Stats
=================================*/

$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});


/*=================================
            Clients
=================================*/

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class = "fa fa-angle-left"></i>',
            '<i class = "fa fa-angle-right"></i>'],
        responsive: {
            //Breakpoint from 0 up
            0: {
                items: 2
            },
            //Breakpont from 480 up
            480: {
                items: 3
            },
            //Breakpont from 768 up
            768: {
                items: 6
            }
        }
    });
});

/*=================================
                Map
=================================*/

$(window).on('load', function () {

    var address = 'Uluru';
    var latLong = { lat: -25.350, lng: 131.040 };

    //Render Google Map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: latLong
    });

    //Add Marker
    const marker = new google.maps.Marker({
        position: latLong,
        map: map,
        title: "Click to see address"
    });

    //Info Window
    const infowindow = new google.maps.InfoWindow({
        content: address,
    });

    // Show info window when user clicks marker
    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });

    // 4 = Resize Function
    google.maps.event.addDomListener(window, 'resize', function() {

        var centre = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(centre);

    });

});

/*=================================
           Navigation
=================================*/

$(function () {

    //Show / Hide nav on page load
    showHideNav();

    $(window).scroll(function() {

        //Show / Hide nav on window scroll
        showHideNav();
      
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            //Show White Nav
            //alert("Scroll position is greater than 50 pixels! Your scroll position is = " + $(window).scrollTop());
            $("nav").addClass("white-nav-top");

            //Show Dark Element
            $(".navbar-brand img").attr("src", "images/logo/logo-dark.png");

            //Show Back to Top button
            $("#back-to-top").fadeIn();


        } else {

            //Hide White Nav
            //alert("Scroll position is less than 50 pixels! Your scroll position is = " + $(window).scrollTop());
            $("nav").removeClass("white-nav-top");

            $(".navbar-brand img").attr("src", "images/logo/logo.png");

            $("#back-to-top").fadeOut();

        }

    }

});


//Smooth Scrolling for Navigation Improved
$(function () {

    $("a.smooth-scroll").click(function(event) {

        event.preventDefault();

        //Get section id like #about, #services, #work, #team and etc
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");


    });

});

/*=================================
           Mobile Menu
=================================*/

$(function () {

    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});

/*=================================
           Animation
=================================*/

//Animate on Scroll
$(function () {
    new WOW().init();
});


// Animation on page load
$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});








/* How to use JQuery*/
//$('h1').hide(500).show(500);

/*$('.content').css({
    color: 'blue',
    fontSize: 50
});*/



/*$(document).ready(function () {

});*/

/*$(function () {
    $('h1').slideUp(1000).slideDown(1000);

    $('#main').css({
        color: 'red',
        fontSize: 25
    });

    $('h1').click(function () {
        $('.content').css({
            color: 'blue',
            fontSize: 50
        });

    });

});

$(window).on("load", function () {
    alert("Window is loaded!");
});*/


// JS Javascript Basics

/* JS Javascript Basics - Learning the JS basics */

//var myVar = "Welcome to JS Javascript basics!";
// document.write(myVar);
// alert(myVar);

/*var a = 20;

if (a == 10) {
    document.write("a value is 10.");
} else {
    document.write("a value is not 10.");
}


function myFunction() {
    document.write("<br> Code execution of function!")
}

myFunction();

var person = {
    firstName: "Jake",
    lastName: "Taylor",
    height: 5.11,
    age: 24
}

document.write("<br>" + person.firstName + "<br>");
document.write(person.lastName + "<br>");
document.write(person.height + "<br>");
document.write(person.age + "<br>");*/