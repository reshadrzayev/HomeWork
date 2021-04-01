// var saat = 13;


// var seher ="Səhər";
// var gunorta ="Gunorta";
// var axsam ="Axsham";


var sehervaxti=6;
var gunortavaxti=13;
var axsamvaxti=18;
var gecevaxti=24;


function myFunc(){
    var saat = document.getElementById("saat").value;

    if(saat>=sehervaxti && saat<gunortavaxti)
    {
        // document.write(seher);
        document.getElementById('txtseher').style.display="block";
        document.getElementById('txtgunorta').style.display="none";
        document.getElementById('txtaxsham').style.display="none";
        document.getElementById('txtgece').style.display="none";

        document.getElementById("div").style.backgroundImage="url('morning.jfif')";
    }
    else if(saat>=gunortavaxti && saat<axsamvaxti){
        // document.write(gunorta);
        document.getElementById('txtgunorta').style.display="block";
        document.getElementById('txtseher').style.display="none";
        document.getElementById('txtaxsham').style.display="none";
        document.getElementById('txtgece').style.display="none";
        
        document.getElementById("div").style.backgroundImage="url('afternoon.jfif')";

    }
    else if(saat>=axsamvaxti && saat<=gecevaxti){
        // document.write(axsam);
        document.getElementById('txtaxsham').style.display="block";
        document.getElementById('txtseher').style.display="none";
        document.getElementById('txtgunorta').style.display="none";
        document.getElementById('txtgece').style.display="none";



        document.getElementById("div").style.backgroundImage="url('evening.jpeg')";

    }
    else if(saat>=0 && saat<6){
        document.getElementById('txtgece').style.display="block";
        document.getElementById('txtseher').style.display="none";
        document.getElementById('txtgunorta').style.display="none";
        document.getElementById('txtgunorta').style.display="none";


        document.getElementById("div").style.backgroundImage="url('night.jpg')";

    }
    else{
        alert("Error")
    }
}

