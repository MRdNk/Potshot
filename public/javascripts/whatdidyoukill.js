
$(document).ready(function() { 

	// Load JSON
	for(animal in animals){
		strHTML = '<div class="formrow">';
		strHTML +=	'<div class="imgwrap">';
		strHTML +=	'<img id="img'+animal+'" src="assets/images/'+animals[animal].icon+'" alt="'+animal+'">';
		strHTML +=	'</div><input type="number" value="0" />';
		strHTML +=	'</div>';
		$('#animalswrap').append(strHTML);
		$('#img'+animal).click( function(){ console.log("Hellow world"); });	
	}

	// Print row in form for each animal

	// Attach event for onclick of animat { Play noise, increase total }

})