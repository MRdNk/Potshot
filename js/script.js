function Animal (elem, opts) {

}

Animal.prototype.move = function () {

}

$(function(){    
    var height = this.height;
    var width = this.width;
    var xPos;
    var yPos;
    var midpoint = height/2; 
    var shots = new Array();
    var count =0;
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
            shots[count]={
                y:yPos,
                x:xPos,
                h:height,
                hl:highLow
            };
            count++;
            console.log("bang:"+ e.pageX +","+ e.pageY+','+highLow+'count:'+count);
            if (count>=6){
                //console.dir( '{' + shots.join() + '}');
                $.ajax({
                    type: "POST",
                    //the url where you want to sent the userName and password to
                    url: 'game/shoot',
                    dataType: 'json',
                    async: false,
                    //json object to sent to the authentication url
                    data: '{' + shots.join() + '}'
                })
            }
        }
    })        
})
          
 

