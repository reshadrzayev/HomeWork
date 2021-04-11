var trying=5;


var num=Math.floor((Math.random()*10)+1);




function show(){
    var guess=document.getElementById("guessTxt").value;

    while(trying>0)
    {
        trying--;
        if(num==guess){
            alert("Təbriklər doğru təxmin. Qalan cəhd sayı:"+trying);
            
            // res="tebrikler";
            break;
        }
        else if(num>guess){
            // res="yuxari";
            

            alert("Daha Yuxarı. Qalan cəhd sayı:"+trying);
            break;

        }
        else{

            alert("Daha Aşağı. Qalan cəhd sayı:"+trying);
            break;
            // res="asagi";
        }


        // if(trying==0){
        //     alert("Cehd bitti");
        //     break;
        // //    res="cehdiniz bitti";
        // }


    }
    // document.getElementById('result').innerHTML=res;

}