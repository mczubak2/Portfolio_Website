$('.mobile').on('click', function () {
    $('.fas').toggleClass('off');
    $('.desktop').toggleClass('off');
    $('nav').toggleClass('active');
});
$('.responsive').on('click', function () {
    $('.responsive').toggleClass('active');
    $('.dynamic').removeClass('active');
    $('.intuitive').removeClass('active');
})
$('.dynamic').on('click', function () {
    $('.dynamic').toggleClass('active');
    $('.responsive').removeClass('active');
    $('.intuitive').removeClass('active');
})
$('.intuitive').on('click', function () {
    $('.intuitive').toggleClass('active');
    $('.responsive').removeClass('active');
    $('.dynamic').removeClass('active');
})
$('.send').on('click', function () {
    alert('Sorry, the mailbox is under repair. This is my address mczubak2@edu.cdv.pl 😅');
})

const htmlWidth = $('html').width();


if (htmlWidth > 1024) {
    $('.tap').addClass('off')
}

$('.hand').on('click', function () {
    $('body, html').animate({
        scrollTop: $('#about-menu').offset().top
    })
})

function CheckWidht() {
    const htmlWidth = $('html').width();
    if (htmlWidth < 1024) {
        $('.fas').toggleClass('off');
        $('.desktop').toggleClass('off');
        $('nav').toggleClass('active');
    }
}

$('.header-menu').on('click', function () {
    $('body, html').animate({
        scrollTop: "0px"
    })
    CheckWidht();
})


$('nav ul li a').on('click', function () {
    const goToSection = '#' + $(this).attr('class');
    if (goToSection === '#footer-menu') {
        $('body, html').animate({
            scrollTop: ($(goToSection).offset().top + 200)
        })
    } else {
        if (htmlWidth < 1024) {
            $('body, html').animate({
                scrollTop: ($(goToSection).offset().top - 230)
            })
        } else {
            $('body, html').animate({
                scrollTop: $(goToSection).offset().top
            })
        }
    }
    CheckWidht();
})

$(window).on('load', function () {
    $('.loader-wrapper').fadeOut('slow');
})

AOS.init();