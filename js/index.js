

var offcanvasNavLinks = document.getElementsByClassName('offcanvas-nav-link');
var myOffcanvas = document.getElementById('offcanvasNavbar');
var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
var offcanvasBackdrop = null;

for (let index = 0; index < offcanvasNavLinks.length; index++) {
    offcanvasNavLinks[index].addEventListener('click', function () {
        bsOffcanvas.hide();
    })
}
