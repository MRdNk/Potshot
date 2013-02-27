function Animal (elem, opts) {

}

Animal.prototype.move = function () {

}

$(function(){    
    animateDiv();
    var animals = ['cow','sheep','swan','dolphin','horse'];

    for(var index in animals) {
      if(animals.hasOwnProperty(index)) {
        new Animal()
      }
    }

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

function animateDiv(name){
    var newq = makeNewPosition();
    var oldq = $('.' + name).offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.' + name).animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });   
}

function calcSpeed(prev, next) {    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);    
    var greatest = x > y ? x : y;    
    var speedModifier = 0.1;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
}


