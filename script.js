$(window).scroll(() => {
    const scroll = $(window).scrollTop(); 
    const htMain = $('#main').height();
    const osMain = $('#main').offset().top;
    const htProjects = $('#projects').height();
    const osProjects = $('#projects').offset().top;
    const htSkills = $('#skills').height();
    const osSkills = $('#skills').offset().top;
    const htAbout = $('#about').height();
    const osAbout = $('#about').offset().top;
    if (scroll < htMain+osMain) {
        blackBG();
        $('#projects-link').removeClass('featured');
    } else if (scroll >= htMain+osMain && scroll < htProjects+osProjects) {
        whiteBG();
        $('#projects-link').addClass('featured');
    } else if (scroll >= htProjects+osProjects && scroll < htSkills+osSkills) {
        blackBG();
        $('#skills-link').addClass('featured');
    } else if (scroll >= htSkills+osSkills && scroll < htAbout+osAbout) {
        whiteBG();
        $('#about-link').addClass('featured');
    } else if (scroll >= htAbout+osAbout) {
        blackBG();
        $('#contact-link').addClass('featured');
    };
});

whiteBG = () => {
    $('#header').addClass('white');
    $('.nav-link').removeClass('white-font');
    $('.nav-link').removeClass('featured');
};

blackBG = () => {
    $('#header').removeClass('white');
    $('.nav-link').addClass('white-font');
    $('.nav-link').removeClass('featured');
}