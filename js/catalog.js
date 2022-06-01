function postsCarousel() {
  var checkWidth = $(window).width();
  var owlPost = $(".catalog__slider");
  
  if (checkWidth > 1200) {
    if (typeof owlPost.data('owl.carousel') != 'undefined') {
      owlPost.data('owl.carousel').destroy();
    }
    owlPost.removeClass('owl-carousel');
  } else if (checkWidth < 1201) {
    owlPost.addClass('owl-carousel');
    owlPost.owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      navText:["",""],
      responsive:{
        0:{
          items: 1
        },
        480:{
          items: 2,
        },
        766:{
          items: 3,
        },
      }
    });
  }
}

postsCarousel();
$(window).resize(postsCarousel);	