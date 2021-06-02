$(document).ready(function() {
    
    $('.hero-carousel').owlCarousel({
        items: 1,
        nav: true,
        navText: ['<object data="assets/icons/chevron-left.svg">', '<object data="assets/icons/chevron-right.svg">'], 
        dots: false
    })
    

    // Promo Carousel

    const promoCarousel = $('.promo-carousel');

    promoCarousel.on('changed.owl.carousel', function(e) {
        const currentItem = e.item.index;
        const totalItems = e.item.count;
        const size = e.page.size;
        console.log(currentItem, totalItems, size);
        if(currentItem === 0 || currentItem === null){
            $('.promoPrev').addClass('disabled')
        }else{
            $('.promoPrev').removeClass('disabled')
        }
        if(currentItem + size === totalItems){
            $('.promoNext').addClass('disabled')
        }else{
            $('.promoNext').removeClass('disabled')
        }

    })
    
    //initiate carousel
    promoCarousel.owlCarousel({
        items: 4,
        margin: 20
    })

    //add event fire to custom next button
    $('.promoNext').click(function() {
        promoCarousel.trigger('next.owl.carousel');
    })

    //add event fire to custom prev button
    $('.promoPrev').click(function() {
        promoCarousel.trigger('prev.owl.carousel');
    })


    // mitra caorusel
    $('.mitra-carousel').owlCarousel({
        items: 4,
        margin: 16,
        nav: true,
        dots: false,
        navText: ['<span class="gg-chevron-left"> </span>', '<span class="gg-chevron-right"> </span>']
    })
})


feather.replace();