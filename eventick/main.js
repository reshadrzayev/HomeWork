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


window.addEventListener('scroll',function(){
    let content = document.querySelector(".counter");
    let contentPos = content.getBoundingClientRect().top;
    let screenPos = window.innerHeight
    if(contentPos < screenPos){
        $('.num').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
            {
              duration: 1500,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }
            });  
          });
    }
});

window.addEventListener('scroll',function(){
    let sec2head = document.querySelector(".rowscroll1");
    let sec2con = document.querySelector(".rowscroll1-2");
    let sec2headPos = sec2head.getBoundingClientRect().top;
    let sec2conPos = sec2con.getBoundingClientRect().top;
    let screenPos = window.innerHeight
    if(sec2headPos < screenPos){
        sec2head.classList.add("animatetoright");
    }
    else{
        sec2head.classList.remove("animatetoright");
    }

    if(sec2conPos < screenPos){
        sec2con.classList.add("animatetoleft");
    }
    else{
        sec2con.classList.remove("animatetoleft");
    }
});

window.addEventListener('scroll',function(){
    let sec3head = document.querySelector(".rowscroll2");
    let sec3con = document.querySelector(".rowscroll2-2");
    let sec3headPos = sec3head.getBoundingClientRect().top;
    let sec3conPos = sec3con.getBoundingClientRect().top;
    let screenPos = window.innerHeight
    if(sec3headPos < screenPos){
        sec3head.classList.add("animatetoright");
    }
    else{
        sec3head.classList.remove("animatetoright");
    }

    if(sec3conPos < screenPos){
        sec3con.classList.add("animatetoleft");
    }
    else{
        sec3con.classList.remove("animatetoleft");
    }
});

window.addEventListener('scroll',function(){
    let row = document.querySelector(".r");
    let button1 = document.querySelector("#button1");
    let button2 = document.querySelector("#button2");
    let button3 = document.querySelector("#button3");
    let btnpos = row.getBoundingClientRect().top;
    let screenPos = window.innerHeight
    if(btnpos < screenPos){
        button1.classList.add("animate");
        button2.classList.add("animate");
        button3.classList.add("animate");
    }
    else{
        button1.classList.remove("animate");
        button2.classList.remove("animate");
        button3.classList.remove("animate");
    }
});





  



