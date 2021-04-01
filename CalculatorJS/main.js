function toplama(){
    var fnum=parseInt(document.getElementById("fnumid").value); 
    var snum=parseInt(document.getElementById("snumid").value);
    var result = fnum+snum;
    
    document.getElementById("resultid").value=result;
}
function cixma(){
    var fnum=parseInt(document.getElementById("fnumid").value); 
    var snum=parseInt(document.getElementById("snumid").value);
    var result = fnum-snum;
    
    document.getElementById("resultid").value=result;
}
function vurma(){
    var fnum=parseInt(document.getElementById("fnumid").value); 
    var snum=parseInt(document.getElementById("snumid").value);
    var result =fnum*snum;

    document.getElementById("resultid").value=result
}
function bolme(){
    var fnum=parseInt(document.getElementById("fnumid").value); 
    var snum=parseInt(document.getElementById("snumid").value);
    var result = fnum/snum;
    
    document.getElementById("resultid").value=result;
}
function clear(){
    // var result ="0";

    document.getElementById("resultid").value="a"; 
}