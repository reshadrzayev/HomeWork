var person1 = {
    ad:"R.Rzayev",
    kod:"5678 5433 2254 3476",
    tarix:"01/22",
    date: "01/02/2021",
    merchant:"Apple",
    spend:"1000$"
};
var person2 = {
    ad:"M.Mammadov",
    kod:"5578 4512 6598 4876",
    tarix:"03/21",
    date: "10/05/2021",
    merchant:"Pull & Bear",
    spend:"150$"
};
var person3 = {
    ad:"S.Aliyeva",
    kod:"4579 1275 8695 3578",
    tarix:"12/22",
    date: "22/03/2021",
    merchant:"Bravo Market",
    spend:"208$"
};

function arrow1(){
    document.getElementById("kodp").innerHTML=person1.kod;
    document.getElementById("adp").innerHTML=person1.ad;
    document.getElementById("tarixp").innerHTML=person1.tarix;
    document.getElementById("datep1").innerHTML=person1.date;
    document.getElementById("mer1").innerHTML=person1.merchant;
    document.getElementById("sp1").innerHTML=person1.spend;

    // document.getElementById("datep2").style.display="none";
    // document.getElementById("mer2").style.display="none";
    // document.getElementById("sp2").style.display="none";

}
function arrow2(){
    document.getElementById("kodp").innerHTML=person2.kod;
    document.getElementById("adp").innerHTML=person2.ad;
    document.getElementById("tarixp").innerHTML=person2.tarix;
    document.getElementById("datep1").innerHTML=person2.date;
    document.getElementById("mer1").innerHTML=person2.merchant;
    document.getElementById("sp1").innerHTML=person2.spend;

}
function arrow3(){
    document.getElementById("kodp").innerHTML=person3.kod;
    document.getElementById("adp").innerHTML=person3.ad;
    document.getElementById("tarixp").innerHTML=person3.tarix;
    document.getElementById("datep1").innerHTML=person3.date;
    document.getElementById("mer1").innerHTML=person3.merchant;
    document.getElementById("sp1").innerHTML=person3.spend;

}


