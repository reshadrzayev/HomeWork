$(function(){
    $("#btn1").click(function(){
        $(".spkr1").css("display","flex");
        $(".spkr2").css("display","none");
        $(".spkr3").css("display","none");
        $(".spkr4").css("display","none");
    });
    $("#btn2").click(function(){
        $(".spkr2").css("display","flex");
        $(".spkr1").css("display","none");
        $(".spkr3").css("display","none");
        $(".spkr4").css("display","none");
    });
    $("#btn3").click(function(){
        $(".spkr3").css("display","flex");
        $(".spkr1").css("display","none");
        $(".spkr2").css("display","none");
        $(".spkr4").css("display","none");
    });
    $("#btn4").click(function(){
        $(".spkr4").css("display","flex");
        $(".spkr1").css("display","none");
        $(".spkr2").css("display","none");
        $(".spkr3").css("display","none");
    });
});



$(function(){
    $("#button1").click(function(){
        $(".row1-content").toggle(200);
        $(".row2-content").hide(200);
        $(".row3-content").hide(200);
    });
    $(".roww2").click(function(){
        $(".row2-content").toggle(200);
        $(".row1-content").hide(200);
        $(".row3-content").hide(200);
    });
    $(".roww3").click(function(){
        $(".row3-content").toggle(200);
        $(".row1-content").hide(200);
        $(".row2-content").hide(200);
    });
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,  
    autoplay:true,
    dots: false,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    },
})



