
$('#type_it_slider').typeIt({
    speed: 50,
    autoStart: false,
    loop: true,
})
    .tiType('<strong style="font-weight: 600">Get Ready</strong>For Portfolio')
    .tiSettings({speed: 700})
    .tiPause(1000)
    .tiSettings({speed: 50})
    .tiDelete()
    .tiType('Set All Link <strong style="font-weight: 600">In One</strong>')
    .tiSettings({speed: 700})
    .tiPause(1000)
    .tiSettings({speed: 50})
    .tiDelete()
    .tiType('Hurry !! <strong style="font-weight: 600">Sign Up Today</strong>');


$(".scroll").on('click', function(event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
});



window.onload = function() {
    Particles.init({
        selector: '.background_3',
        color: '#ffffff',
        connectParticles: true,
        sizeVariations: 9,
        maxParticles: 200,
    });
};










$(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) { // Set position from top to add class
        $('.navbar').addClass("scrolling-bg");

    }
    else {
        $('.navbar').removeClass("scrolling-bg");
    }
});