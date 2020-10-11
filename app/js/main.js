

$(function () {
    
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img/right.svg" alt=""></button>'
    });
    
    $('.tab').on('click', function (e) {
        e.preventDefault();
    
        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
    
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');


    });
    $('.product__item-favorite').on('click', function () {
        $(this).toggleClass('product__item-favorite--active')
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="img/left-black.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="img/right-black.svg" alt=""></button>'
    });


});