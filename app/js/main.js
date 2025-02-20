
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



$(function () {

  
    $(document).on('mousedown touchstart', '.swiper-button-prev, .swiper-button-next, .gallery-slider__button-prev, .gallery-slider__button-next, .reviews-slider__button-prev, .reviews-slider__button-next', function () {
        $(this).addClass('active');
    }).on('mouseup mouseleave touchend', '.swiper-button-prev, .swiper-button-next, .gallery-slider__button-prev, .gallery-slider__button-next, .reviews-slider__button-prev, .reviews-slider__button-next', function () {
        $(this).removeClass('active');
    });

    $('.reviews-slider__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
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
        infinite: false,
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

    
  

    // $('.vouchers-slider__items').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     infinite: false,
    //     arrows: true,
    //     prevArrow: '<button type="button" class="slick-1-prev"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6134 8.94667C19.0934 8.42667 18.2534 8.42667 17.7334 8.94667L11.6134 15.0667C11.0934 15.5867 11.0934 16.4267 11.6134 16.9467L17.7334 23.0667C18.2534 23.5867 19.0934 23.5867 19.6134 23.0667C20.1334 22.5467 20.1334 21.7067 19.6134 21.1867L14.4401 16L19.6134 10.8267C20.1334 10.3067 20.1201 9.45334 19.6134 8.94667Z" fill="white"/></svg></button>',
    //     nextArrow: '<button type="button" class="slick-1-next"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3867 8.94668C11.8667 9.46668 11.8667 10.3067 12.3867 10.8267L17.56 16L12.3867 21.1733C11.8667 21.6933 11.8667 22.5333 12.3867 23.0533C12.9067 23.5733 13.7467 23.5733 14.2667 23.0533L20.3867 16.9333C20.9067 16.4133 20.9067 15.5733 20.3867 15.0533L14.2667 8.93334C13.76 8.42668 12.9067 8.42668 12.3867 8.94668Z" fill="white"/></svg></button>',
    //     dots: false,
    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 3,
    //             }
    //         },
    //         {
    //             breakpoint: 778,
    //             settings: {
    //                 slidesToShow: 2
    //             }
    //         },
    //         {
    //             breakpoint: 550,
    //             settings: {
    //                 slidesToShow: 1
    //             }
    //         }
    //     ]
    // });

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


// var loginPopup = document.querySelector('.login-popup');
// var openModal = document.querySelector('.open-modal');
// var closeModal = document.querySelector('.close-modal');

// var registrationPopup = document.querySelector('.registration-popup');
// var openPopup = document.querySelector('.open-popup');
// var closePop = document.querySelector('.close-popup');

// openModal.addEventListener('click', openModalAndBlockScroll);
// closeModal.addEventListener('click', closeAllPopups);
// loginPopup.addEventListener('click', closeOnOverlayClick);
// loginPopup.addEventListener('cancel', returnScroll);
// document.addEventListener('keydown', closePopupsOnEscape);

// openPopup.addEventListener('click', openPopupAndBlockScroll);
// closePop.addEventListener('click', closeAllPopups);
// registrationPopup.addEventListener('click', closeOnOverlayClick);
// registrationPopup.addEventListener('cancel', returnScroll);

// function openModalAndBlockScroll() {
//   loginPopup.showModal();
//   document.body.classList.add('scroll-block');
// }

// function openPopupAndBlockScroll() {
//   registrationPopup.showModal();
//   document.body.classList.add('scroll-block');
// }

// function returnScroll() {
//   document.body.classList.remove('scroll-block');
// }

// function close() {
//   loginPopup.close();
//   returnScroll();
// }

// function closePopup() {
//   registrationPopup.close();
//   returnScroll();
// }

// function closeAllPopups() {
//   if (loginPopup.open) {
//     loginPopup.close();
//   }
//   if (registrationPopup.open) {
//     registrationPopup.close();
//   }
//   returnScroll();
// }

// function closeOnOverlayClick(event) {
//   if (event.target === event.currentTarget) {
//     closeAllPopups();
//   }
// }

// function closePopupsOnEscape(event) {
//   if (event.key === 'Escape') {
//     closeAllPopups();
//   }
// }

// $(function () {
//   $(".menu a, .to-top").on("click", function (event) {
//     event.preventDefault();
//     var id = $(this).attr('href');
//     var top = $(id).offset().top;
//     $('body,html').animate({ scrollTop: top }, 1500);
//   });

//   $('.menu__btn').on('click', function () {
//     $('.menu__list').toggleClass('menu__list--active');
//     $('.menu__btn').toggleClass('menu__btn--open');
//   });

//   $('.reviews-slider__slider').slick({
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     infinite: false,
//     arrows: true,
//     prevArrow: '<button type="button" class="slick-3-prev"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6134 8.94667C19.0934 8.42667 18.2534 8.42667 17.7334 8.94667L11.6134 15.0667C11.0934 15.5867 11.0934 16.4267 11.6134 16.9467L17.7334 23.0667C18.2534 23.5867 19.0934 23.5867 19.6134 23.0667C20.1334 22.5467 20.1334 21.7067 19.6134 21.1867L14.4401 16L19.6134 10.8267C20.1334 10.3067 20.1201 9.45334 19.6134 8.94667Z" fill="white"/></svg></button>',
//     nextArrow: '<button type="button" class="slick-3-next"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3867 8.94668C11.8667 9.46668 11.8667 10.3067 12.3867 10.8267L17.56 16L12.3867 21.1733C11.8667 21.6933 11.8667 22.5333 12.3867 23.0533C12.9067 23.5733 13.7467 23.5733 14.2667 23.0533L20.3867 16.9333C20.9067 16.4133 20.9067 15.5733 20.3867 15.0533L14.2667 8.93334C13.76 8.42668 12.9067 8.42668 12.3867 8.94668Z" fill="white"/></svg></button>',
//     dots: false,
//     responsive: [
//       {
//         breakpoint: 1350,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 700,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
//   });

//   $('.vouchers-slider__items').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     infinite: false,
//     arrows: true,
//     prevArrow: '<button type="button" class="slick-1-prev"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6134 8.94667C19.0934 8.42667 18.2534 8.42667 17.7334 8.94667L11.6134 15.0667C11.0934 15.5867 11.0934 16.4267 11.6134 16.9467L17.7334 23.0667C18.2534 23.5867 19.0934 23.5867 19.6134 23.0667C20.1334 22.5467 20.1334 21.7067 19.6134 21.1867L14.4401 16L19.6134 10.8267C20.1334 10.3067 20.1201 9.45334 19.6134 8.94667Z" fill="white"/></svg></button>',
//     nextArrow: '<button type="button" class="slick-1-next"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3867 8.94668C11.8667 9.46668 11.8667 10.3067 12.3867 10.8267L17.56 16L12.3867 21.1733C11.8667 21.6933 11.8667 22.5333 12.3867 23.0533C12.9067 23.5733 13.7467 23.5733 14.2667 23.0533L20.3867 16.9333C20.9067 16.4133 20.9067 15.5733 20.3867 15.0533L14.2667 8.93334C13.76 8.42668 12.9067 8.42668 12.3867 8.94668Z" fill="white"/></svg></button>',
//     dots: false,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//         }
//       },
//       {
//         breakpoint: 778,
//         settings: {
//           slidesToShow: 2
//         }
//       },
//       {
//         breakpoint: 550,
//         settings: {
//           slidesToShow: 1
//         }
//       }
//     ]
//   });

// });