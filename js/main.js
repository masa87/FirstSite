document.addEventListener('DOMContentLoaded', function(){

    // dodaje cień do nawigacji
    const nav = document.querySelector('.navbar')

    function addShadow() {
        if(window.scrollY >= 300){
            nav.classList.add('shadow-bg')
        } else{
            nav.classList.remove('shadow-bg')
        }
    }

    window.addEventListener('scroll', addShadow)

    // skrypt naprawiający nawigację (zamyka sięp okliknięciu w cokolwiek na mobilnych urządzeniach)
        $(document).click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("show");
            if (_opened === true && !clickover.hasClass("navbar-toggler")) {
                $(".navbar-toggler").click();
            }
        });  

    // slickJS
        $('.team-carousel').slick({dots: true,
            autoplay: true,
            mobileFirst: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 1600,
                settings: {
                  slidesToShow: 4,
                }
              },
            ]
        });
     

}); 