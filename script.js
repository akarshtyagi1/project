var d;
var m;

$(".tareek td").click(function(event){
    d = event.target.textContent;
    $("#date").text(d);
    console.log(d);
});

$(".mahina td").click(function(event){
    m = event.target.textContent;
    $("#month").text(m);
    console.log(m);
});

$("#submit").click(function(){
    if( d == 26 && m == "July")
        open("bdpage/index.html");
    else
        alert("Aaj tera budday nahi hai....Diya ka hai ....uski birth date daal");    
});