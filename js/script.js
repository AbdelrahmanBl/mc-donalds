const animateTime = 1000

$(document).ready(function() {
    
    const navHeight = $('nav').height();
    $(document).on('scroll',function() {
        /* Sticky Nav */
        if(window.scrollY > navHeight) {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }

        /* Smart Fade In When Scoll */
        if(window.scrollY > ($('#features').offset().top - 100)){
            $('#features').addClass('animate__animated animate__fadeIn')
        }
        if(window.scrollY > ($('.steps').offset().top - 100)){
            $('#mobile-image').addClass('animate__animated animate__fadeInLeft')
            $('.steps-definition').addClass('animate__animated animate__fadeInRight')
        }
        if(window.scrollY > ($('.cities').offset().top - 100)){
            $('.cities').addClass('animate__animated animate__fadeInUp')
        }

    })
        /* After Page Loading bounceIn Header Text */
        $('#header-content').addClass('animate__animated animate__bounceIn')
        $('#login-btn').addClass('animate__animated animate__fadeInLeft')
        $('#signup-btn').addClass('animate__animated animate__fadeInRight')

    /* Scroll Nav Clicks */
    $('#features-link').click(function() {
        $('a').removeClass('active-link')
        $('#features-link').addClass('active-link')
        $('html').animate({scrollTop: $('#features').offset().top},animateTime)
    })

    $('#meals-link').click(function() {
        $('a').removeClass('active-link')
        $('#meals-link').addClass('active-link')
        $('html').animate({scrollTop: $('#meals').offset().top},animateTime)
    })

    $('#steps-link').click(function() {
        $('a').removeClass('active-link')
        $('#steps-link').addClass('active-link')
        $('html').animate({scrollTop: $('#steps').offset().top},animateTime)
    })

    /* Nav Bar Mobile */
    $('#mobile-nav-toggle').click(function() {
        if($('.nav-bar').hasClass('mobile-nav-bar')) {
            $('.nav-bar').removeClass('mobile-nav-bar')
            $('#toggle-icon').removeClass('white')
            $('#toggle-icon').attr('name','reorder-four-outline')
        }else {
            $('.nav-bar').addClass('mobile-nav-bar animate__animated animate__slideInRight')
            $('#toggle-icon').addClass('white')
            $('#toggle-icon').attr('name','close-outline')
        }
    })

    /* When Body Click Close Mobile Nav If Open */
    $('body').click(function(e) {
        if(e.target.id == 'toggle-icon')
            return 0
        if($('.nav-bar').hasClass('mobile-nav-bar')) {
            $('#mobile-nav-toggle').click()
        }
    })
})

/* function to go top of the page */
function goTop() {
    $('a').removeClass('active-link')
    $('html').animate({scrollTop: 0},animateTime);
}