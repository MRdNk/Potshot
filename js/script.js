$(function(){
    $('.area').mousemove(function(e){
  $('.circle').css({'top': e.clientY -50, 'left': e.clientX -50});
});
    
})