  document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementsByClassName('grid-gallery')[0];
    rowGrid(container, {
      itemSelector: '.grid-item',
      minMargin: 10,
      maxMargin: 25,
      firstItemClass: 'first-item',
      lastRowClass: 'last-row',
    });
  });


  function initMap() {
    const myLatLng = {
      lat: 55.755819,
      lng: 37.617644
    };
    const minimap = new google.maps.Map(document.getElementById("maps"), {
      zoom: 14,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: myLatLng,
      map: minimap,
    });

    const myLatLng2 = {
      lat: 55.755819,
      lng: 37.617644
    };
    const bigmap = new google.maps.Map(document.getElementById("big-map"), {
      zoom: 14,
      center: myLatLng2,
    });
    new google.maps.Marker({
      position: myLatLng2,
      map: bigmap,
    });
  }

  const lightbox = GLightbox({
    selector: '.box-slide'
  });

  const lightbox2 = GLightbox({
    selector: '.box-gallery'
  });

  const lightbox3 = GLightbox({
    selector: '.galleryBox'
  });

  const lightbox4 = GLightbox({
    selector: '.gallery-item'
  });

  const lightbox5 = GLightbox({
    selector: '.gallery-grid-item'
  });



  var swiperReviews = new Swiper(".swiper-reviews", {
    slidesPerView: 1,
    effect: 'slide',
    speed: 600,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".next2",
      prevEl: ".prev2",
    },
    pagination: {
      el: ".pagination",
      clickable: true,
    },

  });


  var swiperProductNew = new Swiper(".swiper-product-new", {
    effect: 'slide',
    speed: 700,
    loop: true,
    spaceBetween: 40,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".next4",
      prevEl: ".prev4",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    }
  });


  var swiperGallery = new Swiper(".swiper-gallery", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    effect: 'slide',
    spaceBetween: 5,
    speed: 900,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-gallery-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".next1",
      prevEl: ".prev1",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      575: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      991: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    }
  });

  var swiperBg = new Swiper('.swiper-bg', {
    slidesPerView: 1,
    lazy: true,
    direction: 'horizontal',
    speed: 1200,
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiperProducts = new Swiper(".swiper-products", {
    slidesPerView: 1,
    effect: 'slide',
    speed: 900,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".next1",
      prevEl: ".prev1",
    },
  });