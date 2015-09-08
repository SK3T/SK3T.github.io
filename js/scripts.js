$(function(){
  $("a#began").click(function(event){
    event.stopPropagation();
    $("#story").get(0).scrollIntoView();
  });

});
