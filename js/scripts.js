$(function(){
  $("a#began").click(function(event){
    event.stopPropagation();
    $("#hidden_story").toggle().get(0).scrollIntoView();
  });
  $(document).click( function(){
    $('#hidden_story').hide();
});
});
