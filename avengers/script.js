var name ;
var answer;

var body = $("body");
var content = $("div#content");
var popup = $("div.popup-box");
var img = $("img.popup-img");

function checkAnswer(event){  
   
   name = event.target.id;
   answer = document.querySelector("input."+name).value;
   console.log(name);      
   
   if( answer === name ){
      content.addClass("blur");
      img.addClass("animation");
      popup.addClass("visible");
   }

}

