





//------- arrow bottum to top js-----------

let arrow = document.getElementById("arrow");
arrow.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" })
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