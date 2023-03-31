


const swiperReview = new Swiper('.review__mobile',{
    
    direction: 'horizontal',
    loop: true,
   
    navigation: {
      nextEl: '.review__arrow-right',
      prevEl: '.review__arrow-left',
    }
});
const swiperDermatologs = new Swiper('.dermatologs__mobile',{
    
    direction: 'horizontal',
    loop: true,
   
    navigation: {
      nextEl: '.dermatologs__arrow-right',
      prevEl: '.dermatologs__arrow-left',
    }
});
const swiperProsiform = new Swiper('.psoriform__wrapper-mobile',{
  
    direction: 'horizontal',
    loop: true,
   
    navigation: {
      nextEl: '.psoriform__arrow-right',
      prevEl: '.psoriform__arrow-left',
    }
});

const menu = document.querySelector('.nav__mobile')
const menuBtn= document.querySelector('.menu__burger')

menuBtn.addEventListener('click', function(){
  menu.classList.toggle('active')
})

