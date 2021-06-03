$(window).scroll(() => {
    var scroll = $(window).scrollTop(); // how many pixels you've scrolled
    // var os = $('#main').offset().top; // pixels to the top of main
    var htMain = $('#main').height(); // height of main in pixels
    // if you've scrolled further than the top of main plus it's height
    // change the color. either by adding a class or setting a css property
    if (scroll >= htMain) {
        $('#header').addClass('white');
        $('.nav-link').removeClass('white-font');
        $('#projects-link').addClass('featured');
    } else {
        $('#header').removeClass('white');
        $('.nav-link').addClass('white-font');
        $('#projects-link').removeClass('featured');
    };
});