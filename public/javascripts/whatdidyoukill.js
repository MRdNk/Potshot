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

	soundy.done (function (err, done) {
		if (err)
			console.error(err)
		else 
			$('.anianimal.sheep').click (function () {soundy.play(soundy.sounds.baa)})
			$('.anianimal.dog').click (function () { soundy.play (soundy.sounds.dog2)})
			$('.anianimal.cow').click ( function () { soundy.play (soundy.sounds.moo)})
			$('.anianimal.swan').click ( function () { soundy.play (soundy.sounds.swan)})
			$('.anianimal.duck').click ( function () { soundy.play (soundy.sounds.duck)})
			$('.anianimal.horse').click ( function () { soundy.play (soundy.sounds.horse)})
			//$('.anianimal.pig').click ( function () { soundy.play (soundy.sounds.pig)})
			$('.anianimal.dolphin').click ( function () { soundy.play (soundy.sounds.dolphin)})
	});


})
