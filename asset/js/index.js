$(function(){
 /**
   * 
   * a 태그 클릭 이벤트 정지
   *
   * @version 1.0.0
   * @since 
   * @author 
   * @pram
   */        
 $('a').click(function(e){
  e.preventDefault();
});

/**
 * 
 * intro-bg
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
const char = gsap.timeline({})
char
.addLabel('a')
.from('.intro-bg .char',{
  yPercent: 100, stagger: 0.1, 
  ease: "back.out(1.7)"
},'a')
.to('.intro-bg .char',{
  yPercent: 100, stagger: 0.1, 
  ease: "back.out(1.7)"
},'a+=0.8')

$(function(){
  let num = 0;
  setInterval(time, 3600);
  
  function time(){
    let box = $('.char-box');
    box.removeClass('on');
    box.eq(num).addClass('on');
    num++;

    if ( num >= box.length ) {num= 0} 
    
    char.restart();
  }
});

/**
 * 
 * intro-bg+sc-visual
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
$('.intro-bg .link-in').click(function(e){
  e.preventDefault();

  const intro = gsap.timeline({})

  intro
  .addLabel('a')
  .to('.intro-bg',{
    yPercent:-100
  },'a')
  .from('.sc-visual .img-box.left',{
    opacity:0,
    yPercent:-100
  },'a+=0.2')
  .from('.sc-visual .img-box.right',{
    opacity:0,
    yPercent:100
  },'a+=0.2')
  .from('.sc-visual .bg-dimmed',{
    opacity:0,
  },'a+=0.5')
  .from('.sc-visual .text-box .char',{
    yPercent:100,
    stagger:0.1
  })
  .from('.sc-visual .text-box em',{
    opacity:0,
    yPercent:-100
  })
});

/**
 * 
 * header(매뉴 이벤트)
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
  $('.gnb .gnb-item').mouseover(function(){
    
    $(this).addClass('active');
   
    $(this).on('scroll touchmove mousewheel', function(e) {
      e.preventDefault();
      e.stopPropagation();
    });
  
  });
  
  $('.gnb .gnb-item').mouseout(function(){
    
    $(this).removeClass('active'); 
    
    $(this).off('scroll touchmove mousewheel'); 
  });
  
/**
 * 
 * header(매뉴 스크롤 이벤트)
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
  let lastScroll = 0;
  
  $(window).scroll(function(){
  
    const curr = $(this).scrollTop();
  
    if (curr > lastScroll) {
      $('.header').addClass('hide');
    } else{
      $('.header').removeClass('hide');
    }
  
    lastScroll = curr;
  
  });
  
/**
 * 
 * header(쇼핑카트)
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
  $('.util-area .link-cart').click(function(e){
      e.preventDefault();
  
      $(this).siblings('.cart-box').slideToggle();
  });
  $('.util-area .close-box').click(function(e){
    e.preventDefault();
    $(this).parents('.cart-box').slideUp();
  });
  
/**
 * 
 * header(반응형 매뉴 클릭 이벤트)
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
  $('.header-group .btn-menu').click(function(e){
    e.preventDefault();
  
    $(this).toggleClass('active');
  
    if ( $(this).hasClass('active') ) {
        $(this).text('CLOSE')
        $(this).siblings('.menu-box').addClass('show'); 
        $('body').addClass('overflow');
    } else {
        $(this).text('MENU')    
        $(this).siblings('.menu-box').removeClass('show');    
        $(this).siblings('.menu-box').find('.link-item').removeClass('active');
        $(this).siblings('.menu-box').find('.sub-list').slideUp();
        $('body').removeClass('overflow');
    }
  });
  
  $('.menu-box .link-item').click(function(e){
    e.preventDefault();
  
    $(this).toggleClass('active');
    $(this).siblings('.sub-list').slideToggle();
  
  });
  
/**
 * 
 * ad-swiper
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
   const adSlide = new Swiper(".ad-slide", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
 
/**
 * 
 * link-more (새로고침x)
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
  $('.link-more').click(function(e){
    e.preventDefault();
  });
 
/**
 * 
 * anniversary(사진 나타내기)
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
  gsap.to('.sc-anniversary .bg',{
    scrollTrigger:{
      trigger:".sc-anniversary .bg",
      start:"top 80%",
      end:"bottom top",
      // markers:true,
    },
    width: 0,
    transition:0.2
  });

/**
 * gsap(text 효과-scroll trigger)
 * anniversary
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
  $('[data-y]').each(function(i,el){
    y = $(this).data('y');

    gsap.from(el,{
      scrollTrigger:{
        trigger:el,
        start:"top 90%",
        end:"bottom top",
        // markers:true,
        scrub:1
      },
      yPercent:y,
    });
  });

/**
 * 반응형 (swiper 생성)
 * anniversary
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
  anniSwiper = new Swiper(".anni-swiper",{
      slidesPerView: 1.1,
      breakpoints:{
        768:{
          slidesPerView: 3,
        }
      }
  });

/**
 * 
 * prd
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
  const prd = new Swiper(".prd-slide", {
  pagination: {
    el: ".prd-pagination",
  },
  });
  gsap.from('.sc-prd .bg-text .char',{
    scrollTrigger:{
      trigger:'.sc-prd .bg-text .char',
      start:"top 95%",
      // markers:true,
    },
    opacity:0,
    yPercent:100,
    stagger:0.1
  });

  prd.on('slideChange',function(){

    idx = this.realIndex;

    $('.prd-list .prd-item').eq(idx).addClass('active').siblings().removeClass('active');
  });
  $('.prd-list .prd-item').click(function(e){
      e.preventDefault();

      $(this).addClass('active').siblings().removeClass('active');

      prd.slideTo($(this).index());
  });
  
/**
 * 
 * prd(마우스 포인터)
 *
 * @version 1.0.0
 * @since 2022-01-16
 * @author 본인이름 (Nico)
 * @pram
 */
  
  // 마우스 포인터 1안안(움직임이 마우스포인터 움직임보다 느림, 부드러움)
  // $('.sc-prd .swiper-wrapper').mousemove(function(e){
  //   x = e.offsetX
  //   y = e.offsetY  
  //   gsap.to('.sc-prd .drag',{
  //     "left":x,
  //     "top":y
  //   });
  //   $('.swiper-slide').mouseover(function(){
  //     $('.sc-prd .drag').addClass('show');
  //   })
  //   $('.swiper-slide').mouseout(function(){
  //     $('.sc-prd .drag').removeClass('show');
  //   })
  //   $('.text-box').mouseover(function(){
  //     $('.sc-prd .drag').removeClass('show');
  //   })
  //   $('.text-box').mouseout(function(){
  //     $('.sc-prd .drag').addClass('show');
  //   })
  // });
  
  // 마우스 포인터 2안안(움직임이 마우스포인터 움직임과 거의 같다)
  $('.sc-prd .swiper-wrapper').ready(function(){
    const mouse = $('.drag');
  
    function moveCursor(e){
      mouse.css({
        "left":e.offsetX,
        "top":e.offsetY
      })
    };
    $(window).on('mousemove', moveCursor);
  
    $('.slide-item').mouseover(function(){
          $('.sc-prd .drag').addClass('circle');
    })
    $('.slide-item').mouseout(function(){
      $('.sc-prd .drag').removeClass('circle');
    })
    $('.prd-slide .text-box').mouseover(function(){
      $('.sc-prd .drag').removeClass('circle').addClass('hide');
    })
    $('.prd-slide .text-box').mouseout(function(){
      $('.sc-prd .drag').addClass('circle').removeClass('hide');
    })
  });

/**
 * 
 * brand
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
  gsap.from('.sc-brand .bg-box .char',{
      scrollTrigger:{
      trigger:'.sc-brand .bg-box .char',
      start:"top 95%",
      // markers:true,
    },
  opacity:0,
  yPercent:100,
  stagger:0.1
})

/**
 * 
 * lab
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
  const labItem = gsap.timeline({
    default:{
      duration: 1,
    }
  })
  
  labItem
  .addLabel('c')
  .from('.sc-lab .lab-item.item1',{
      scrollTrigger:{
        trigger:'.sc-lab .lab-item.item1',
        start:"top 70%",
        // markers:true,
      },
      xPercent:100
  },'c')
  .from('.sc-lab .lab-item.item3',{
    scrollTrigger:{
      trigger:'.sc-lab .lab-item.item3',
      start:"top 70%",
      // markers:true,
    },
    xPercent:-100
  },'c')
  
/**
 * 
 * lab(반응형)
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
let sw = $(window).width();
let labSwiper = undefined;

function labWidth(){
  if (sw < 768 && labSwiper == undefined){
    labSwiper = new Swiper(".lab-swiper",
    {
      slidesPerView: 1.1,
      pagination: {
        el: ".lab-pagination",
      },
    })
  }else if(sw >= 768 && labSwiper != undefined){
    labSwiper.destroy();
    labSwiper = undefined;
  }
}

labWidth();

$(window).on('resize', function(){
  sw = $(window).width();
  labWidth();
});

/**
 * 
 * footer follow
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
  ScrollTrigger.matchMedia({

    "(min-width: 768px)": function(){
      $('[data-fy]').each(function(i,el){

      const fy = $(this).data('fy');
  
        gsap.to(el,{
          scrollTrigger:{
            trigger:el,
            start:"top 80%",
            end:"bottom top",
            // markers:true,
            scrub:1,
          },
          yPercent:fy
        });
      })
    }
  });

});
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  