 


window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
      header.classList.remove('sticky');
    } else {
      header.classList.add('sticky');
      header.classList.remove('scrolled');
    }
}
);



$(document).ready(function(){
    // footerEl = $('.footer');
    // console.log(footerEl);
    // $.fn.isInViewport = function() {
    //     var elementTop = $(this).offset().top;
    //     var elementBottom = elementTop + $(this).outerHeight();
      
    //     var viewportTop = $(window).scrollTop();
    //     var viewportBottom = viewportTop + $(window).height();
      
    //     return elementBottom > viewportTop && elementTop < viewportBottom;
    //   };

    // $(window).scroll(function(){
        
    //     if (footerEl.isInViewport()) {
    //         $('.backtoTop').addClass('shown');
    //       } else {
    //         $('.backtoTop').removeClass('shown');
    //       }
         
    //   });
      
      //Click event
      $('.backtoTop').click(function () {
        $("html, body").animate({ scrollTop: "0" },  100);
      });



  // banner sliders 
  $('.fade-sl').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    fade: true,
    dots:true,
    arrows:true,
    cssEase: 'linear',
    customPaging: function (slider, i) {
          return ' <button> <span class="slider-dot"> 0' + (i + 1) + '</span>  <button>';
        },
  });

  // testimonial sliders

  $('.testimonial-slider-quotes').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testimonial-slider-auth'
});

$('.testimonial-slider-auth')
    .on('afterChange init', function (event, slick, direction) {
        for (var i = 0; i < slick.$slides.length; i++) {
            var $slide = $(slick.$slides[i]);
            if ($slide.hasClass('slick-current')) {
                $slide.prev().addClass('prevdiv');
                $slide.next().addClass('nextdiv');
                break;
            }
        }
    }
    )
.on('beforeChange', function(event, slick) {
    for (var i = 0; i < slick.$slides.length; i++){
        var $slide = $(slick.$slides[i]);
        if ($slide.hasClass('slick-current')) {
            $slide.prev().removeClass('prevdiv');
            $slide.next().removeClass('nextdiv');
            break;
        }
    }
})


  $('.testimonial-slider-auth').slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonial-slider-quotes',
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    prevArrow: $('.testimonial-prev'),
    nextArrow: $('.testimonial-next'),
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
    ]
});


  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });



  // inspiration slider
  if($('.inspiration-slider').length){
     
    inspSlider = $('.inspiration-slider');
  }

    inspSlider.on('init', function(event, slick){
        addCustomSlickAttributes();
    });

    inspSlider.slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      // arrows: false,
      nextArrow: '#slideNext',
      prevArrow: '#slidePrev',
      responsive: [
          {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1, 
          }
          },
          {
          breakpoint: 768,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: true,
          }
          },
          {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
          }
          },
          {
          breakpoint: 320,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
          }
          }
      ]
  });



  inspSlider.on("afterChange", function(event, slick, current_slide_index, next_slide_index) {
      addCustomSlickAttributes();
  });

  function addCustomSlickAttributes() {
      $("[data-custom]").removeAttr("data-custom");
      $(".inspiration-slider .slick-active").each(function(index, el) {
          if(index%2==0){
              idx = "even"
          }else{
              idx = "odd"
          }
          $(el).attr("data-custom", idx);
      })
  }



})


var btnTop = $('.backtoTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btnTop.addClass('shown');
  } else {
    btnTop.removeClass('shown');
  }
});
