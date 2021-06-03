$(window).scroll(() => {
    var scroll = $(window).scrollTop(); // how many pixels you've scrolled
    // var os = $('#main').offset().top; // pixels to the top of main
    var htMain = $('#main').height(); // height of main in pixels
    // if you've scrolled further than the top of main plus it's height
    // change the color. either by adding a class or setting a css property
    if (scroll >= htMain) {
        whiteBG();
        $('#projects-link').addClass('featured');
    } else {
        blackBG();
        $('#projects-link').removeClass('featured');
    };
});

whiteBG = () => {
    $('#header').addClass('white');
    $('.nav-link').removeClass('white-font');
};

blackBG = () => {
    $('#header').removeClass('white');
    $('.nav-link').addClass('white-font');
}