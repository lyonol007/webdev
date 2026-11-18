let hamburger = document.querySelector('#hamburger');
   
function showNav() {
    document.querySelector('.nav-links').classList.toggle('shownav');
    console.log("toggled");
};


hamburger.addEventListener ("click", showNav);
