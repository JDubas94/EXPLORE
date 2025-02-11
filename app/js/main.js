document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu__btn");
    const menuList = document.querySelector(".menu__list");
  
    if (menuBtn && menuList) {
      menuBtn.addEventListener("click", function () {
        menuList.classList.toggle("menu__list--active");
        menuBtn.classList.toggle("menu__btn--open");
      });
    }
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