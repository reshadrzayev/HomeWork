$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        800:{
            items:1
        },
        1000:{
            items:2
        },
        1024:{
            items:2
        },
        1500:{
            items:3
        }

    }
})

