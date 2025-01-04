$(function () {
  $('.reviews-slider__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-3-prev"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6134 8.94667C19.0934 8.42667 18.2534 8.42667 17.7334 8.94667L11.6134 15.0667C11.0934 15.5867 11.0934 16.4267 11.6134 16.9467L17.7334 23.0667C18.2534 23.5867 19.0934 23.5867 19.6134 23.0667C20.1334 22.5467 20.1334 21.7067 19.6134 21.1867L14.4401 16L19.6134 10.8267C20.1334 10.3067 20.1201 9.45334 19.6134 8.94667Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" class="slick-3-next"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3867 8.94668C11.8667 9.46668 11.8667 10.3067 12.3867 10.8267L17.56 16L12.3867 21.1733C11.8667 21.6933 11.8667 22.5333 12.3867 23.0533C12.9067 23.5733 13.7467 23.5733 14.2667 23.0533L20.3867 16.9333C20.9067 16.4133 20.9067 15.5733 20.3867 15.0533L14.2667 8.93334C13.76 8.42668 12.9067 8.42668 12.3867 8.94668Z" fill="white"/></svg></button>',
    dots: false
  });

  $('.vouchers-slider__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-1-prev"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6134 8.94667C19.0934 8.42667 18.2534 8.42667 17.7334 8.94667L11.6134 15.0667C11.0934 15.5867 11.0934 16.4267 11.6134 16.9467L17.7334 23.0667C18.2534 23.5867 19.0934 23.5867 19.6134 23.0667C20.1334 22.5467 20.1334 21.7067 19.6134 21.1867L14.4401 16L19.6134 10.8267C20.1334 10.3067 20.1201 9.45334 19.6134 8.94667Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" class="slick-1-next"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3867 8.94668C11.8667 9.46668 11.8667 10.3067 12.3867 10.8267L17.56 16L12.3867 21.1733C11.8667 21.6933 11.8667 22.5333 12.3867 23.0533C12.9067 23.5733 13.7467 23.5733 14.2667 23.0533L20.3867 16.9333C20.9067 16.4133 20.9067 15.5733 20.3867 15.0533L14.2667 8.93334C13.76 8.42668 12.9067 8.42668 12.3867 8.94668Z" fill="white"/></svg></button>',
    dots: false

  });
  $('.gallery-slider__wrapper').slick({
    vertical: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button type="button" class="slick-2-prev"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6134 8.94667C19.0934 8.42667 18.2534 8.42667 17.7334 8.94667L11.6134 15.0667C11.0934 15.5867 11.0934 16.4267 11.6134 16.9467L17.7334 23.0667C18.2534 23.5867 19.0934 23.5867 19.6134 23.0667C20.1334 22.5467 20.1334 21.7067 19.6134 21.1867L14.4401 16L19.6134 10.8267C20.1334 10.3067 20.1201 9.45334 19.6134 8.94667Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" class="slick-2-next"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3867 8.94668C11.8667 9.46668 11.8667 10.3067 12.3867 10.8267L17.56 16L12.3867 21.1733C11.8667 21.6933 11.8667 22.5333 12.3867 23.0533C12.9067 23.5733 13.7467 23.5733 14.2667 23.0533L20.3867 16.9333C20.9067 16.4133 20.9067 15.5733 20.3867 15.0533L14.2667 8.93334C13.76 8.42668 12.9067 8.42668 12.3867 8.94668Z" fill="white"/></svg></button>',
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.slick-1-prev, .slick-1-next').on('mousedown', function () {
    $(this).addClass('active');
  }).on('mouseup mouseleave', function () {
    $(this).removeClass('active');
  });
  $('.slick-2-prev, .slick-2-next').on('mousedown', function () {
    $(this).addClass('active');
  }).on('mouseup mouseleave', function () {
    $(this).removeClass('active');
  });
  $('.slick-3-prev, .slick-3-next').on('mousedown', function () {
    $(this).addClass('active');
  }).on('mouseup mouseleave', function () {
    $(this).removeClass('active');
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



