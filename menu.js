let hamburger = document.querySelector('#hamburger');
let navLinks = document.querySelector('.nav-links')
   
function showNav() {

    navLinks.classList.toggle('shownav');
    console.log("toggled");

    hamburger.classList.toggle('active');
    console.log("toggled");

    hamburger.setAttribute(
        'aria-expanded',
        hamburger.classList.contains('active')
    );
};


hamburger.addEventListener ("click", showNav);
