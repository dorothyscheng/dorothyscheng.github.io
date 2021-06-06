# Portfolio Site

## Approach
I wanted to create a simple, clean site to showcase myself, projects, and skills. I started by deciding what sections I wanted to showcase, and then created a general layout. To add some additional flavor and differentiate between sections, I decided to alternate the background colors and have the header change color to match the section. I think this gives the sections the feel of being seperate pages while still being a single page.
After deciding on layout, I began to add content working top to bottom. Once I had content, I adjusted the layout for each section to give the site a cohesive feel. I also added media queries so the site is fully responsive to screen size.

## Technologies Used
HTML5, custom CSS, JavaScript, jQuery

## Code Highlights
Prior to this portfolio site, I hadn't used any scroll features. I'm happy with the JS and jQuery code used to change the header color based on the section.
```
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
    } else if (scroll >= htMain && scroll < htProjects+osProjects) {
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
```

Another new-to-me feature is the embedded contact form. I am happy I was able to integrate the form API which will email me when a new message is submitted.

## Next Steps
- I would like to add some more info to my main introductory section, while still keeping the page clean.
- As my portfolio grows, I will need to add projects and reformat the project section.