
document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector(".menu__btn");
    const menuList = document.querySelector(".menu__list");

    if (menuBtn && menuList) {
        menuBtn.addEventListener("click", function () {
            menuList.classList.toggle("menu__list--active");
            menuBtn.classList.toggle("menu__btn--open");
        });
    }


    const loginPopup = document.querySelector('.login-popup');
    const openModal = document.querySelector('.open-modal');
    const closeModal = document.querySelector('.close-modal');

    const registrationPopup = document.querySelector('.registration-popup');
    const openPopup = document.querySelector('.open-popup');
    const closePop = document.querySelector('.close-popup');


    if (openModal && loginPopup) {
        openModal.addEventListener('click', function () {
            loginPopup.showModal();
            document.body.classList.add('scroll-block');
        });

        closeModal.addEventListener('click', closeAllPopups);
        loginPopup.addEventListener('click', closeOnOverlayClick);
        loginPopup.addEventListener('close', returnScroll);
    }


    if (openPopup && registrationPopup) {
        openPopup.addEventListener('click', function (event) {
            event.preventDefault();
            if (loginPopup.open) {
                loginPopup.close();
                setTimeout(() => {
                    registrationPopup.showModal();
                    registrationPopup.focus();
                    document.body.classList.add('scroll-block');
                }, 200);
            } else {
                registrationPopup.showModal();
                document.body.classList.add('scroll-block');
            }
            document.body.classList.add('scroll-block');
        });

        closePop.addEventListener('click', closeAllPopups);
        registrationPopup.addEventListener('click', closeOnOverlayClick);
        registrationPopup.addEventListener('close', returnScroll);

    }


    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeAllPopups();
        }
    });

    function returnScroll() {
        document.body.classList.remove('scroll-block');
    }

    function closeAllPopups() {
        if (loginPopup && loginPopup.open) loginPopup.close();
        if (registrationPopup && registrationPopup.open) registrationPopup.close();
        returnScroll();
    }

    function closeOnOverlayClick(event) {
        if (event.target === event.currentTarget) {
            closeAllPopups();
        }
    }
});

const swiper = new Swiper('.swiper', {
    loop: true, 
    slidesPerView: 4, 
    spaceBetween: 10,
    breakpoints: {
        1200: { slidesPerView: 4, spaceBetween: 10 }, 
        990: { slidesPerView: 3, spaceBetween: 10 },  
        768: { slidesPerView: 2, spaceBetween: 10 },  
        480: { slidesPerView: 1, spaceBetween: 5 }    
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const links = document.querySelectorAll('.menu__item-link');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const blockId = link.getAttribute('href');
    const block = document.querySelector(blockId);

    if (block) {

      block.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})



$(function () {

  
    $(document).on('mousedown touchstart', '.swiper-button-prev, .swiper-button-next, .gallery-slider__button-prev, .gallery-slider__button-next, .reviews-slider__button-prev, .reviews-slider__button-next', function () {
        $(this).addClass('active');
    }).on('mouseup mouseleave touchend', '.swiper-button-prev, .swiper-button-next, .gallery-slider__button-prev, .gallery-slider__button-next, .reviews-slider__button-prev, .reviews-slider__button-next', function () {
        $(this).removeClass('active');
    });

    $('.reviews-slider__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: true,
        prevArrow: '.reviews-slider__button-prev',
        nextArrow: '.reviews-slider__button-next',
        dots: false,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 724,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });

    $('.gallery-slider__wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        dots: false,
        prevArrow: $('.gallery-slider__button-prev'),
        nextArrow: $('.gallery-slider__button-next'),
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });


    $(".rating").each(function () {
        const rating = $(this).data("rating");
        const starElement = $(this).find(".star");
        const ratingValueElement = $(this).find(".rating__value");
    
        starElement.rateYo({
          rating: rating,
          numStars: 1,
          starWidth: "20px",
          ratedFill: "#BABA00",
          readOnly: true,
          starSvg:
            '<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0001 15.27L15.1701 18.39C15.5501 18.62 16.0201 18.28 15.9201 17.85L14.5501 11.97L19.1101 8.01997C19.4401 7.72997 19.2701 7.17997 18.8201 7.13997L12.8101 6.62997L10.4601 1.08997C10.2901 0.679971 9.71006 0.679971 9.54006 1.08997L7.19006 6.62997L1.18006 7.13997C0.740056 7.17997 0.560056 7.72997 0.900056 8.01997L5.46006 11.97L4.09006 17.85C3.99006 18.28 4.46006 18.62 4.84006 18.39L10.0001 15.27Z" fill="#BABA00"/></svg>',
        });
    
        ratingValueElement.text(rating);
      });
    
      $(".star").rateYo({
        starWidth: "19px",
        normalFill: "#ccccce",
        ratedFill: "#BABA00",
        readOnly: true,
        starSvg: '<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0001 15.27L15.1701 18.39C15.5501 18.62 16.0201 18.28 15.9201 17.85L14.5501 11.97L19.1101 8.01997C19.4401 7.72997 19.2701 7.17997 18.8201 7.13997L12.8101 6.62997L10.4601 1.08997C10.2901 0.679971 9.71006 0.679971 9.54006 1.08997L7.19006 6.62997L1.18006 7.13997C0.740056 7.17997 0.560056 7.72997 0.900056 8.01997L5.46006 11.97L4.09006 17.85C3.99006 18.28 4.46006 18.62 4.84006 18.39L10.0001 15.27Z" fill="#BABA00"/></svg>'
      });

});
