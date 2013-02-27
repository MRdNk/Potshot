$(function(){    
    var height = this.height;
    var width = this.width;
    var midpoint = height/2;            
    $(document).mousemove(function(e){
        //need to detect sides to prevent the circle going off
        $('.circle').css({
            'top': e.clientY -50, 
            'left': e.clientX -50
        });
    }).mousedown(function(e){
        if(e.which==1){ 
            //get height           
            console.log("bang:"+ e.pageX +","+ e.pageY+','+height);
        }        
    })
          
})    
