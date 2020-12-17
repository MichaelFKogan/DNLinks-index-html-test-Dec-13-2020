$(document).ready(function() {


var data = [];

// POPULATE HOMPAGE - ALL
var ref = firebase.database().ref("COLUMNS");

ref.once("value", function(snapshot) {

var data = [];
		// console.log("Snapshot.value");
		// console.log(snapshot.val());

		console.log(snapshot.val().Column1.Name);
		console.log(snapshot.val().Column1.subtitle1.("1").Name);

	snapshot.forEach(function(childNodes){

		// console.log("childNodes.value");
		// console.log(childNodes.val());

		// console.log(childNods.val());




	console.log(childNodes.val().Column1);	

		// if(childNodes.val().Category == "Facebook Group"){
		// 	console.log("YES")
			// data.push(childNodes.val());
		// }




	});
});

});