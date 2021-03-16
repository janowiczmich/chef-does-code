
$('.cooking-carousel').slick(
    
    {
    autoplay: true,
    mobileFirst: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [

          {
              breakpoint: 786,
              settings: { slidesToShow:3
            }
          },
          {
              breakpoint: 992,
              settings: { slidesToShow:4
            }
          }
    ]

  });
      