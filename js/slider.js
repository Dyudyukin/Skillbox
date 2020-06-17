const slider = document.querySelector('.swiper-container');

  let SliderSwiper = new Swiper (slider, {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      715: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1365: {
        slidesPerView: 3,
        spaceBetween: 35,
      }
    },
    loop: true,
    wrapperClass: 'slider__list',
    slideClass: 'slider__item',
    pagination: {
      el: '.slider__pagination',
      type: 'bullets',
      bulletClass: 'paginator__item',
      bulletActiveClass: 'paginator__item--active',
      clickable: true
    },
    a11y: {
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
      paginationBulletMessage: "Переход к {{index}} слайду",
    },
    navigation: {
      nextEl: '.slider__navigation--next',
      prevEl: '.slider__navigation--prev',
    },
  });
  