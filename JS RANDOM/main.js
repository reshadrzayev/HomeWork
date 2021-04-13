var trying=5;
var num=Math.floor((Math.random()*10)+1);
var times=0;
 
function show(){
    var guess=document.getElementById("guessTxt").value;
    
    while(trying>0)
    {
        
        trying--;
        times++;
        
        if(trying==0){
            alert("Cehd bitti");
            break;
        }
        else{
            if(num==guess){
                alert("Təbriklər doğru təxmin. "+ times + "ci dəfədə bildiniz!");
                document.getElementById("xal").innerHTML=100-(20*(times-1));
                break;
            }
            else if(num>guess){
                alert("Daha Yuxarı. Qalan cəhd sayı: "+trying);
                break;
            }
            else{
                alert("Daha Aşağı. Qalan cəhd sayı: "+trying);
                break;
            }
        }

        


    }

}