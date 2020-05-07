const anchors = document.querySelectorAll('#navigation > a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

$(document).ready(function () {

    $('.feedback').owlCarousel({
        items: 1,
        nav: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 6000,
        loop: false,
        navText: ['<img src="./img/prev.png">','<img src="./img/next.png">'],
    });

    $('.cases-carousel').owlCarousel({
        items: 1,
        nav: true,
        /*autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 6000,*/
        loop: true,
        navText: ['<img src="./img/prev.png">','<img src="./img/next.png">'],
    });
});