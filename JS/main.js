//------- arrow bottum to top js-----------

let arrow = document.getElementById("arrow");
arrow.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" })
})




//nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener('click', function(){
        navCollapse.classList.remove('show');
    })
})


// ----------slider js----------
var elem = document.querySelector('.slider_wrap');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    autoPlay: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false
});