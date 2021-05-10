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
        1024:{
            items:2
        },
        1500:{
            items:3
        }

    }
});

$(document).ready(function(){
    var x = 1;
    $(".black-white").click(function(){
        x++;
        if(x % 2 ==0)
        {
            $("body").css("backgroundColor","#1a202c");
            $("nav").css("backgroundColor","#2d3748");
            $(".section1").css("backgroundColor","#1a202c");
            $("#rowsec1").css("backgroundColor","#2d3748");
            $(".section1 h2").css("color","#edf2f7");
            $(".section1 p").css("color","#e2e8f0");
            $(".section1 .rowimg").css("backgroundColor","#2d3748");
            $(".section1 .count").css("color","#a3bffa");
            $(".section1 .txt, i").css("color","white");
            $(".btn2").css({"border":"3px solid #718096","backgroundColor": "#2d3748","color":"#f8f8f8"});
            $("#circleJS").css({ "left": "25px"});
            $("#b-w").css("background", "linear-gradient(45deg,#3366FF,#AC15B8)");
            $("#headsec2 .line").css("backgroundColor", "#718096");
            $("#headsec2 h2").css("color", "#edf2f7");
            $(".aa").css("color","#e2e8f0");
            $(".imghover").css("backgroundColor","#2d3748");
            $(".imghover i").css("color","#f8f8f8");
            $(".imghover h6").css("color","#f8f8f8");
            $(".page3").css("backgroundColor","#2d3748");
            $(".page3 h5").css("color","#f8f8f8");
            $(".page3 h4").css("color","#f8f8f8");
            $(".basliq").css({"color":"#f8f8f8","border-left":"4px solid #f8f8f8"});
            $(".basliq button").css("color","white");
            $(".card").css("backgroundColor","#2d3748");
            $(".card span").css("color","#f8f8f8");
            $(".card-title").css("color","#f8f8f8");
            $(".card-text").css("color","#f8f8f8");
            $(".page5").css("backgroundColor","#2d3748");
            $(".page5 h3").css("color","#f8f8f8");
            $(".page5 p").css("color","#f8f8f8");
            $("footer").css("backgroundColor","#2d3748");
            $("footer a").css("color","#f8f8f8");
            $("footer p").css("color","#f8f8f8");
            $("footer h6").css("color","#f8f8f8");
        }else if(x%2==1){
            location.reload();
            
            // $("body").css("backgroundColor","#f8f8f8");
            // $("nav").css("backgroundColor","#2d3748");
            // $(".section1").css("backgroundColor","white");
            // $(".section1 h2").css("color","#2d3748");
            // $(".section1 p").css("color","#2d3748");
            // $(".btn2").css({"border":"3px solid #afb3b9","backgroundColor": "#dfdfdf","color":"#606b7c"});
            $("#circleJS").css({ "left": "3px"});
            $("#b-w").css("background", "linear-gradient(45deg,#FF7D6B,#FFD64C)");
            // $("header").css("backgroundColor", "white");
            // $(".aa").css("color","#4a5568");
            // $(".imghover").css("backgroundColor","#edf2f7");
            // $(".imghover i").css("color","#718096");
            // $(".imghover h6").css("color","#718096");
            // $(".page3").css("backgroundColor","white");
            // $(".page3 h5").css("color","#4a5568");
            // $(".page3 h4").css("color","#4a5568");
            // $(".basliq").css({"color":"#4a55685b","border-left":"4px solid #4a55685b"});
            // $(".basliq button").css("color","#444f63");
            // $(".card").css("backgroundColor","white");
            // $(".card span").css("color","#718096");
            // $(".card-title").css("color","#718096");
            // $(".card-text").css("color","#718096");
            // $(".page5").css("backgroundColor","white");
            // $(".page5 h3").css("color","#262729");
            // $(".page5 p").css("color","#262729");
            // $("footer").css("backgroundColor","white");
            // $("footer a").css("color","#262729");
            // $("footer p").css("color","#262729");
            // $("footer h6").css("color","#262729");
        }
    });
  })


  window.addEventListener('scroll',function(){
    let section2 = document.querySelector(".owl-carousel");
    let sec2pos = section2.getBoundingClientRect().top;
    let screenPos = window.innerHeight;
    if(sec2pos < screenPos){
        section2.classList.add("owl-active");
    }
    else{
        section2.classList.remove("owl-active");
    }

});

window.addEventListener('scroll',function(){
    let img = document.querySelector("#sec3img");
    let row1 = document.querySelector("#sec3row1");
    let row2 = document.querySelector("#sec3row2");
    let row3 = document.querySelector("#sec3row3");
    let sec3pos = row2.getBoundingClientRect().top;
    let screenPos = window.innerHeight;
    if(sec3pos < screenPos){
        img.classList.add("img-active");
        row1.classList.add("row-active1");
        row2.classList.add("row-active1");
        row3.classList.add("row-active1");
    }
    else{
        img.classList.remove("img-active");
        row1.classList.remove("row-active1");
        row2.classList.remove("row-active1");
        row3.classList.remove("row-active1");
    }
});


window.addEventListener('scroll',function(){
    let cardleft = document.querySelector(".l1");
    let cardright = document.querySelector(".l2");

    let cardleft1 = document.querySelector(".l3");
    let cardright1 = document.querySelector(".l4");

    let sec4row1 = document.querySelector("#sec4row1");
    let sec4row2 = document.querySelector("#sec4row2");

    let sec4row1pos = sec4row1.getBoundingClientRect().top;
    let sec4row2pos = sec4row2.getBoundingClientRect().top;

    let screenPos = window.innerHeight;

    if(sec4row1pos < screenPos){
        cardleft.classList.add("card-left-active");
        cardright.classList.add("card-right-active");
    }
    else{
        cardleft.classList.remove("card-left-active");
        cardright.classList.remove("card-right-active");
    }

    if(sec4row2pos < screenPos){
        cardleft1.classList.add("card-left-active");
        cardright1.classList.add("card-right-active");
    }
    else{
        cardleft1.classList.remove("card-left-active");
        cardright1.classList.remove("card-right-active");
    } 
});

window.addEventListener('scroll',function(){
    let cardleft = document.querySelector(".l5");
    let cardright = document.querySelector(".l6");

    let cardleft1 = document.querySelector(".l7");
    let cardright1 = document.querySelector(".l8");

    let sec5row1 = document.querySelector("#sec5row1");
    let sec5row2 = document.querySelector("#sec5row2");

    let sec5row1pos = sec5row1.getBoundingClientRect().top;
    let sec5row2pos = sec5row2.getBoundingClientRect().top;

    let screenPos = window.innerHeight;

    if(sec5row1pos < screenPos){
        cardleft.classList.add("card-left-active");
        cardright.classList.add("card-right-active");
    }
    else{
        cardleft.classList.remove("card-left-active");
        cardright.classList.remove("card-right-active");
    }

    if(sec5row2pos < screenPos){
        cardleft1.classList.add("card-left-active");
        cardright1.classList.add("card-right-active");
    }
    else{
        cardleft1.classList.remove("card-left-active");
        cardright1.classList.remove("card-right-active");
    } 
});
window.addEventListener('scroll',function(){
    let cardleft = document.querySelector(".l9");
    let cardright = document.querySelector(".l10");

    let cardleft1 = document.querySelector(".l11");
    let cardright1 = document.querySelector(".l12");

    let sec6row1 = document.querySelector("#sec6row1");
    let sec6row2 = document.querySelector("#sec6row2");

    let sec6row1pos = sec6row1.getBoundingClientRect().top;
    let sec6row2pos = sec6row2.getBoundingClientRect().top;

    let screenPos = window.innerHeight;

    if(sec6row1pos < screenPos){
        cardleft.classList.add("card-left-active");
        cardright.classList.add("card-right-active");
    }
    else{
        cardleft.classList.remove("card-left-active");
        cardright.classList.remove("card-right-active");
    }

    if(sec6row2pos < screenPos){
        cardleft1.classList.add("card-left-active");
        cardright1.classList.add("card-right-active");
    }
    else{
        cardleft1.classList.remove("card-left-active");
        cardright1.classList.remove("card-right-active");
    } 
});

window.addEventListener('scroll',function(){
    let cardleft = document.querySelector(".l13");
    let cardright = document.querySelector(".l14");

    let cardleft1 = document.querySelector(".l15");
    let cardright1 = document.querySelector(".l16");

    let sec7row1 = document.querySelector("#sec7row1");
    let sec7row2 = document.querySelector("#sec7row2");

    let sec7row1pos = sec7row1.getBoundingClientRect().top;
    let sec7row2pos = sec7row2.getBoundingClientRect().top;

    let screenPos = window.innerHeight;

    if(sec7row1pos < screenPos){
        cardleft.classList.add("card-left-active");
        cardright.classList.add("card-right-active");
    }
    else{
        cardleft.classList.remove("card-left-active");
        cardright.classList.remove("card-right-active");
    }

    if(sec7row2pos < screenPos){
        cardleft1.classList.add("card-left-active");
        cardright1.classList.add("card-right-active");
    }
    else{
        cardleft1.classList.remove("card-left-active");
        cardright1.classList.remove("card-right-active");
    } 
});

window.addEventListener('scroll',function(){
    let section8 = document.querySelector(".section8");
    let row = document.querySelector("#rowsec8")
    let sec8pos = section8.getBoundingClientRect().top;
    let screenPos = window.innerHeight;
    if(sec8pos < screenPos){
        row.classList.add("active-mainrow")
    }
    else{
        row.classList.remove("active-mainrow")
    }
});



