var limit = 6;

$(document).ready(function() { 	

	// Load JSON
	for(animal in animals){
		strHTML = '<div class="formrow" id="ani-'+animal+'" data-animalkey="'+animal+'">';
		strHTML +=	'<div class="anianimal '+animal+'"></div>';
		strHTML +=	'<input type="number" name="'+animal+'" id="nmb'+animal+'" value="0" />';
		strHTML += '</div>';
		$('#animalswrap').append(strHTML);
		$('#ani-'+animal).click( function(){ 
			animalkey = $(this).data("animalkey");
			console.log(  );
			if(limit){
				$('#nmb'+animalkey).val( parseInt($('#nmb'+animalkey).val())+1 );
				limit--;
			}
		});	
	}

	// Print row in form for each animal

	// Attach event for onclick of animat { Play noise, increase total }

})