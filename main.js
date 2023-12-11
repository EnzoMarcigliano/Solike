$(document).ready(function ($) {
    "use strict";


    var book_table = new Swiper(".book-table-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var team_slider = new Swiper(".team-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    jQuery(".filters").on("click", function () {
        jQuery("#menu-dish").removeClass("bydefault_show");
    });
    $(function () {
        var filterList = {
            init: function () {
                $("#menu-dish").mixItUp({
                    selectors: {
                        target: ".dish-box-wp",
                        filter: ".filter",
                    },
                    animation: {
                        effects: "fade",
                        easing: "ease-in-out",
                    },
                    load: {
                        filter: ".all, .breakfast, .lunch, .dinner",
                    },
                });
            },
        };
        filterList.init();
    });

    jQuery(".menu-toggle").click(function () {
        jQuery(".main-navigation").toggleClass("toggled");
    });

    jQuery(".header-menu ul li a").click(function () {
        jQuery(".main-navigation").removeClass("toggled");
    });

    gsap.registerPlugin(ScrollTrigger);

    var elementFirst = document.querySelector('.site-header');
    ScrollTrigger.create({
        trigger: "body",
        start: "30px top",
        end: "bottom bottom",

        onEnter: () => myFunction(),
        onLeaveBack: () => myFunction(),
    });

    function myFunction() {
        elementFirst.classList.toggle('sticky_head');
    }

    var scene = $(".js-parallax-scene").get(0);
    var parallaxInstance = new Parallax(scene);


});


jQuery(window).on('load', function () {
    $('body').removeClass('body-fixed');

    //activating tab of filter
    let targets = document.querySelectorAll(".filter");
    let activeTab = 0;
    let old = 0;
    let dur = 0.4;
    let animation;

    for (let i = 0; i < targets.length; i++) {
        targets[i].index = i;
        targets[i].addEventListener("click", moveBar);
    }

    // initial position on first === All 
    gsap.set(".filter-active", {
        x: targets[0].offsetLeft,
        width: targets[0].offsetWidth
    });

    function moveBar() {
        if (this.index != activeTab) {
            if (animation && animation.isActive()) {
                animation.progress(1);
            }
            animation = gsap.timeline({
                defaults: {
                    duration: 0.4
                }
            });
            old = activeTab;
            activeTab = this.index;
            animation.to(".filter-active", {
                x: targets[activeTab].offsetLeft,
                width: targets[activeTab].offsetWidth
            });

            animation.to(targets[old], {
                color: "#0d0d25",
                ease: "none"
            }, 0);
            animation.to(targets[activeTab], {
                color: "#fff",
                ease: "none"
            }, 0);

        }

    }
});
$(document).ready(function () {
    function armarCarrito() {
        var $catalogo = $('#catalogo')
        for (let i = 0; i < productos.length; i++) {
            let $producto = productos[i];
            let $productoHTML = '<div class="col-6 col-md-4">' + '<div class="sc-product-item mb-3">' + '<img class="img-fluid rounded-4" data-name="product_image" src="img/productos/' + $producto.img
                + '" alt="' + $producto.item + '">' +
                '<h5 class="mt-2" data-name="product_name">' + $producto.item + '</h5>' +
                '<p data-name="product_desc">' + $producto.descripcion + '</p>' +
                '<input name="product_price" value="' + $producto.precio + '" type="hidden" />' +
                '<input name="product_id" value="' + $producto.id + '" type="hidden" />' +
                '<h6 class="mt-0 col-4">$' + $producto.precio + '</h6>' +
                '<button class="sc-add-to-cart col-5 btn btnblanco2 h6">Añadir</button>' + '</div>' + '</div>';
            $catalogo.append($productoHTML);
        }
    }

    const opcionesCarrito = {
        lang: {
            cartTitle: "Mis productos",
            checkout: 'Confirmar',
            clear: 'Vaciar',
            subtotal: 'Subtotal:',
            cartRemove: 'Borrar',
            cartEmpty: 'El carrito está vacío!<br/>Comienza a elegir'
        },
    };

    armarCarrito();
    $('#smartcart').smartCart(opcionesCarrito);
});

(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()


$(document).ready(function () {
    $("#owl-carruselgaleria").owlCarousel({
        items: 2, // Número de elementos a mostrar en el carrusel
        loop: true, // Repetir el carrusel
        margin: 35, // Margen entre elementos
        autoplay: true,
        autoplayTimeout: 900,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });
});

$(document).ready(function () {
    $("#owl-carruselgaleria2").owlCarousel({
        items: 2, // Número de elementos a mostrar en el carrusel
        loop: true, // Repetir el carrusel
        margin: 35, // Margen entre elementos
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 4 },
            600: { items: 3 },
            1000: { items: 5 }
        }
    });
});

$(document).ready(function () {
    $("#owl-carruselreseña").owlCarousel({
        items: 3, // Número de elementos a mostrar en el carrusel
        loop: true, // Repetir el carrusel
        margin: 35, // Margen entre elementos
        nav: true, // Mostrar botones de navegación
        dots: true, // Mostrar indicadores de navegación
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        navText: ['<i class="bi bi-chevron-left display-6"></i>', '<i class="bi bi-chevron-right display-6"></i>'], // Personaliza las flechas
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });
});

AOS.init();