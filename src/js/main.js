// wow = new WOW({
//     boxClass:     'wow',      
//     animateClass: 'animated', 
//     offset:       0,          
//     mobile:       false,       
//     live:         true        
// })
// wow.init();

function sliders() {
    $('.slider').slick({
        dots: false,
        arrows: true,
        speed: 1000,
        fade: true,     
        slideToShow: 1,
        autoplay: true
    });

    $('.reviews-slider').slick({
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,      
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slideToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }
        ]
    });

    $('.partners-slider').slick({
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.card_slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.card_slider-nav'
    });
    $('.card_slider-nav').slick({
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.card_slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3

                }
            }
        ]
    });

    $('.products-slider').slick({
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

}
sliders();

$(function(){
    $('.call').on('click', function(){
        var modal = $(this).attr('data-modal');
        $(modal).fadeIn();
        return false;
    });
    $('.modal .close, .modal__layer').on('click', function(){
        $(this).parents('.modal').fadeOut();
        return false;
    });

    $('.nav--btn').on('click', function(){
        if ($('header .nav').is(':visible')) {
            $('header .nav').slideUp();
            $(this).removeClass('open');
        } else {
            $('header .nav').slideDown();
            $(this).addClass('open');
        }
        return false;
    });
    $('.phone--btn').on('click', function(){
        if ($('header .top').is(':visible')) {
            $('header .top').slideUp();
            $(this).removeClass('open');
        } else {
            $('header .top').slideDown();
            $(this).addClass('open');
        }
        return false;
    });

    $('[name="tel"]').inputmask('+7 (999) 999-99-99');

    $('.langs').on('click', function(){
        var langs = document.querySelector('.langs ul');
        if($(langs).is(':visible')){
            $(langs).slideToggle();
            $(this).removeClass('open');
        }
        else{
            $(langs).slideToggle();
            $(this).addClass('open');
        }
        return false;
    });

    $('.col--address .more--btn').on('click', function(){
       $(this).next('ul').slideToggle().parent().toggleClass('open');
        return false;
    });
    $('.col--phone .more--btn').on('click', function(){
        $(this).next('ul').slideToggle().parent().toggleClass('open');
         return false;
     });

    $('.search--btn').on('click', function(){
        var search = $('.search');
        $(search).addClass('open');
        return false;
    });
    $('.search .close-btn').on('click', function(){
        var search = $('.search');
        $(search).removeClass('open');
        return false;
    });
});

$(window).on("load",function(e){
    if ($(window).width() <= '1024'){
        $('header .submenu > a').on('click', function(){
            $(this).next().slideToggle();
            return false;
        });
        $('.submenu').on('mouseleave', function(){
            $(this).children('.submenu__block').slideUp();
        });
    } else {
        $('header .submenu > a').on('mouseover', function(){
            $(this).next().slideDown(250);
        });
        $('.submenu').on('mouseleave', function(){
            $(this).children('.submenu__block').slideUp(250);
        });
    }
});

// $(function(){
//     $('.btn--up').bind('click.smoothscroll',function (e) {
//         e.preventDefault();
//         var target = this.hash,
//         $target = $(target);

//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top
//             }, 1000, 'swing', function () {
//             window.location.hash = target;
//         });
//     });

//     $(window).scroll(function(){
//         var bo = $(this).scrollTop();
//         var a = $(".btn--up").css('opacity')
//         if ( bo >= 200 && a == 0) {$(".btn--up").stop().animate({'opacity':'1'},400)};
//         if ( bo < 200 && a == 1) {$(".btn--up").stop().animate({'opacity':'0'},400)};
//     });
// });
