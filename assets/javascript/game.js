
 	var characters= $('.character');
 	var gameStarted = false;
 

 	$('#yourCharacter .col-md-12 .image').click(function(){
 		if (gameStarted == false){
	 		for (var i = 0; i < characters.length; i++) {
	 			 if (characters[i] != this) {
	 				$('#enemiesAvailable').append(characters[i]);
	 				//if .character is in row "#enemiesAvailable" add a class
	 				if (characters[i]!= this){
	 					$(characters[i] ).addClass("redBorder")
	 				};
	 				

	 				gameStarted = true;
 				 	//if the image is clicked, it moves to new row
 				 	$('#enemiesAvailable img.character').click(function(){
 				 		if (characters[i] = this){
 				 			$('#defender').append(characters[i]);

	 				 		if (characters[i] = this){
		 					$(characters[i] ).removeClass("redBorder").addClass('yellowBorder')
		 					};
 				 			
 				 		}

 				 	});
	 			}
	 		}
 		}
 	});


	    
//Scoring section
var pointsIncrementUser=8; 
var initialPoints = 8;
var pointsIncrementEnemy= 25;
var pointsUser= 120; //beginning HP
var pointsEnemy=180; //beginning HP
	

 	  $('#attack').click(function(){
 	  	  if(pointsEnemy>= 0 && pointsUser>= 0){
 	  	  	pointsEnemy=pointsEnemy - pointsIncrementUser;
 	  	  	pointsUser=pointsUser - pointsIncrementEnemy;
 	  		pointsIncrementUser=pointsIncrementUser + initialPoints; 
 	  	    document.querySelector('#score').innerHTML =
	'<p>You attacked enemy for ' + pointsUser + ' points.</p>' +
	'<p>Enemy attacked you for ' + pointsEnemy + ' points.</p>';
 	 	  		
 	  	}else
 	  		alert("Game Over!!");
 	  		
 	  	});
 	 	
			 $( '#reset' ).click(function() {
   				 location.reload();
			});




