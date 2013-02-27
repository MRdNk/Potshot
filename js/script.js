$(function(){    
      animateDiv();
    var height = this.height;
    var width = this.width;
    var xPos;
    var yPos;
    var midpoint = height/2;            
    $(document).mousemove(function(e){
        yPos = e.clientY;
        xPos = e.clientX;
        //need to detect sides to prevent the circle going off
        $('.circle').css({
            'top': yPos -50, 
            'left': xPos -50            
        });
    }).mousedown(function(e){
        if(e.which==1){ 
            //get height   
            var highLow = ((height/2)<yPos)?"low":"high";        
            console.log("bang:"+ e.pageX +","+ e.pageY+','+highLow);
        }        
    })
          
})   

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(animals){
    var newq = makeNewPosition();
    $('.a').animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv();        
    });
    
};
