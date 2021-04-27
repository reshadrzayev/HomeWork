$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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
    }
    
})

function funcOver1(){
    document.querySelector("#r1").style.display="flex";
}
function funcOut1(){
    document.querySelector("#r1").style.display="none";
}

function funcOver2(){
    document.querySelector("#r2").style.display="flex";
}
function funcOut2(){
    document.querySelector("#r2").style.display="none";
}

function funcOver3(){
    document.querySelector("#r3").style.display="flex";
}
function funcOut3(){
    document.querySelector("#r3").style.display="none";
}

function funcOver4(){
    document.querySelector("#r4").style.display="flex";
}
function funcOut4(){
    document.querySelector("#r4").style.display="none";
}

function funcOver5(){
    document.querySelector("#r5").style.display="flex";
}
function funcOut5(){
    document.querySelector("#r5").style.display="none";
}