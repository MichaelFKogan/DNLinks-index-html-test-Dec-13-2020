/*

Apartments
Accommodation
Couple
Digital Nomad
Email Marketing
Expat
Fitness
Gym

Muay Thai


*/



function searchAccommodation(){
	if($('input').val() != 'Accommodation'){$('#example').DataTable().search("Accommodation").draw();$('input').val('Accommodation');}
	else{$('#example').DataTable().search("").draw();$('input').val('');}	
}

function searchApartments(){
	if($('input').val() != 'Apartments'){$('#example').DataTable().search("Apartments").draw();$('input').val('Apartments');}
	else{$('#example').DataTable().search("").draw();$('input').val('');}	
}

function searchCouple(){
	if($('input').val() != 'Couple'){$('#example').DataTable().search("Couple").draw();$('input').val('Couple');}
	else{$('#example').DataTable().search("").draw();$('input').val('');}	
}

function searchDigitalNomad(){
	if($('input').val() != 'Digital Nomad'){$('#example').DataTable().search("Digital Nomad").draw();$('input').val('Digital Nomad');}
	else{$('#example').DataTable().search("").draw();$('input').val('');}	
}

function searchEmailMarketing(){
	if($('input').val() != 'Email Marketing'){$('#example').DataTable().search("Email Marketing").draw();$('input').val('Email Marketing');}
	else{$('#example').DataTable().search("").draw();$('input').val('');}	
}

function searchExpat(){
	if($('input').val() != 'Expat'){$('#example').DataTable().search("Expat").draw();$('input').val('Expat');}
	else{$('#example').DataTable().search("").draw();$('input').val('');}	
}

function searchFitness(){
	if($('input').val() != 'Fitness'){$('#example').DataTable().search("Fitness").draw();$('input').val('Fitness');}
	else{$('#example').DataTable().search("").draw();$('input').val('');}	
}

function searchGym(){
	if($('input').val() != 'Gym'){$('#example').DataTable().search("Gym").draw();$('input').val('Gym');}
	else{$('#example').DataTable().search("").draw();$('input').val('');}	
}

function searchMuayThai(){
	if($('input').val() != 'Muay Thai'){$('#example').DataTable().search("Muay Thai").draw();$('input').val('Muay Thai');}
	else{$('#example').DataTable().search("").draw();$('input').val('');}	
}



var data = [];

// POPULATE HOMPAGE - ALL
var ref = firebase.database().ref("ALL");

ref.once("value", function(snapshot) {

var data = [];
		// console.log(snapshot.val());
		// console.log(data);

	snapshot.forEach(function(childNodes){

	// console.log(childNodes.val());
	console.log(childNodes.val().Tag);	

		// if(childNodes.val().City == "Bangkok 🌶️"){
		// 	console.log("YES")
			data.push(childNodes.val());
		// }
	});

});