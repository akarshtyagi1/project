var name ;
var answer;

var body = $("body");
var content = $("div#content");
var popup = $("div.popup-box");
var img = $("img.popup-img");
var close = $("#close-icon");

function checkAnswer(event){  

   name = event.target.id;
   answer = document.querySelector("input."+name).value;
   answer =answer.toLowerCase();
   answer = answer.slice(0, (name.length));
   
   
   if( answer === name ){
      $("div.popup-box img").attr("src","img/"+name+".jpg");
      content.addClass("blur");
      img.addClass("animation");
      popup.addClass("visible");
   }

   close.click(function () {
      content.removeClass("blur");
      img.removeClass("animation");
      popup.removeClass("visible");
      document.querySelector("input."+name).value = "";
     });

}

