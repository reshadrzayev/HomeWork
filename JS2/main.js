// var saat = 13;


// var seher ="Səhər";
// var gunorta ="Gunorta";
// var axsam ="Axsham";


var sehervaxti=6;
var gunortavaxti=13;
var axsamvaxti=18;

function myFunc(){
    var saat = document.getElementById("saat").value;

    if(saat>=sehervaxti && saat<gunortavaxti)
    {
        // document.write(seher);
        document.getElementById('txtseher').style.display="block";
        document.getElementById('txtgunorta').style.display="none";
        document.getElementById('txtaxsham').style.display="none";


        document.getElementById("div").style.backgroundImage="url('morning.jfif')";
    }
    else if(saat>=gunortavaxti && saat<axsamvaxti){
        // document.write(gunorta);
        document.getElementById('txtgunorta').style.display="block";
        document.getElementById('txtseher').style.display="none";
        document.getElementById('txtaxsham').style.display="none";


        
        document.getElementById("div").style.backgroundImage="url('afternoon.jfif')";

    }
    else if(saat>=axsamvaxti){
        // document.write(axsam);
        document.getElementById('txtaxsham').style.display="block";
        document.getElementById('txtseher').style.display="none";
        document.getElementById('txtgunorta').style.display="none";


        document.getElementById("div").style.backgroundImage="url('evening.jpeg')";

    }
    else{
        document.write="error";
    }
}

