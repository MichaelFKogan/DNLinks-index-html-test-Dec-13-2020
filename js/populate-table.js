$(document).ready(function() {


var data = [];

// POPULATE HOMPAGE - ALL
var ref = firebase.database().ref("ALL");

ref.once("value", function(snapshot) {

var data = [];
		// console.log(snapshot.val());

	snapshot.forEach(function(childNodes){

	// console.log(childNodes.val());
	// console.log(childNodes.val().City);	

		// if(childNodes.val().City == "Bangkok 🌶️"){
		// 	console.log("YES")
			data.push(childNodes.val());
		// }
	});

	  $('#example').DataTable({
			"paging":   false,
			"order": [[ 2, "asc" ]],
	        // "rowReorder": {"selector": 'td:nth-child(2)'},
	        // "responsive": true,
	        "stateSave": true,
	        "fixedHeader": true,
	        // "serverSide": true,

	     	data: data,
	     					// NAME
	        columns: [{data: "Name", "render": function ( data, type, row, meta ) {
	        				return '<a href="'+row.URL+'" target="_blank">'+data+' <img class="table-new-window-icon" src="../img/new-window-icon.png" style="height:12px;margin-left:5px;margin-bottom:2px;"></a>';}
    						  },
    						
    						// CATEGORY
	        		  {data: "Category", "render": function ( data, type, row, meta ) {
	        		  		// console.log(row);
	        		  		// console.log(data);
	        		  		if(data == ""){}
							else{return '<a class="tableCategory" onclick="search'+data.replace(/\s/g,'')+'()">'+data+'</a>';}
    						  }},
    						
    						// TAG
	        		  {data: "Tag", "render": function ( data, type, row, meta ) {
							var array = data.split(', ');
							// console.log(array[0].replace(/\s/g,''));
							// console.log(row);
							// console.log(array.length);
							// console.log(array[0]);
							if (array.length == 0){}
							else if (array.length == 1){return '<button class="tableTags" onclick="search'+array[0].replace(/\s/g,'')+'()">'+array[0]+'</button>';}	
							else if (array.length == 2){return '<button class="tableTags" onclick="search'+array[0].replace(/\s/g,'')+'()">'+array[0]+'</button><button class="tableTags" onclick="search'+array[1].replace(/\s/g,'')+'()">'+array[1]+'</button>';}
							else if (array.length == 3){return '<button class="tableTags" onclick="search'+array[0].replace(/\s/g,'')+'()">'+array[0]+'</button><button class="tableTags" onclick="search'+array[1].replace(/\s/g,'')+'()">'+array[1]+'</button><button class="tableTags" onclick="search'+array[2].replace(/\s/g,'')+'()">'+array[2]+'</button>';}
							else if (array.length == 4){return '<button class="tableTags" onclick="search'+array[0].replace(/\s/g,'')+'()">'+array[0]+'</button><button class="tableTags" onclick="search'+array[1].replace(/\s/g,'')+'()">'+array[1]+'</button><button class="tableTags" onclick="search'+array[2].replace(/\s/g,'')+'()">'+array[2]+'</button><button class="tableTags" onclick="search'+array[3].replace(/\s/g,'')+'()">'+array[3]+'</button>';}
							else if (array.length == 5){return '<button class="tableTags" onclick="search'+array[0].replace(/\s/g,'')+'()">'+array[0]+'</button><button class="tableTags" onclick="search'+array[1].replace(/\s/g,'')+'()">'+array[1]+'</button><button class="tableTags" onclick="search'+array[2].replace(/\s/g,'')+'()">'+array[2]+'</button><button class="tableTags" onclick="search'+array[3].replace(/\s/g,'')+'()">'+array[3]+'</button><button class="tableTags" onclick="search'+array[4].replace(/\s/g,'')+'()">'+array[4]+'</button>';}
							else if (array.length == 6){return '<button class="tableTags" onclick="search'+array[0].replace(/\s/g,'')+'()">'+array[0]+'</button><button class="tableTags" onclick="search'+array[1].replace(/\s/g,'')+'()">'+array[1]+'</button><button class="tableTags" onclick="search'+array[2].replace(/\s/g,'')+'()">'+array[2]+'</button><button class="tableTags" onclick="search'+array[3].replace(/\s/g,'')+'()">'+array[3]+'</button><button class="tableTags" onclick="search'+array[4].replace(/\s/g,'')+'()">'+array[4]+'</button><button class="tableTags" onclick="search'+array[5].replace(/\s/g,'')+'()">'+array[5]+'</button>';}
							else if (array.length == 7){return '<button class="tableTags" onclick="search'+array[0].replace(/\s/g,'')+'()">'+array[0]+'</button><button class="tableTags" onclick="search'+array[1].replace(/\s/g,'')+'()">'+array[1]+'</button><button class="tableTags" onclick="search'+array[2].replace(/\s/g,'')+'()">'+array[2]+'</button><button class="tableTags" onclick="search'+array[3].replace(/\s/g,'')+'()">'+array[3]+'</button><button class="tableTags" onclick="search'+array[4].replace(/\s/g,'')+'()">'+array[4]+'</button><button class="tableTags" onclick="search'+array[5].replace(/\s/g,'')+'()">'+array[5]+'</button><button class="tableTags" onclick="search'+array[6].replace(/\s/g,'')+'()">'+array[6]+'</button>';}
							else if (array.length == 8){return '<button class="tableTags" onclick="search'+array[0].replace(/\s/g,'')+'()">'+array[0]+'</button><button class="tableTags" onclick="search'+array[1].replace(/\s/g,'')+'()">'+array[1]+'</button><button class="tableTags" onclick="search'+array[2].replace(/\s/g,'')+'()">'+array[2]+'</button><button class="tableTags" onclick="search'+array[3].replace(/\s/g,'')+'()">'+array[3]+'</button><button class="tableTags" onclick="search'+array[4].replace(/\s/g,'')+'()">'+array[4]+'</button><button class="tableTags" onclick="search'+array[5].replace(/\s/g,'')+'()">'+array[5]+'</button><button class="tableTags" onclick="search'+array[6].replace(/\s/g,'')+'()">'+array[6]+'</button><button class="tableTags" onclick="search'+array[7].replace(/\s/g,'')+'()">'+array[7]+'</button>';}
							else if (array.length == 9){return '<button class="tableTags" onclick="search'+array[0].replace(/\s/g,'')+'()">'+array[0]+'</button><button class="tableTags" onclick="search'+array[1].replace(/\s/g,'')+'()">'+array[1]+'</button><button class="tableTags" onclick="search'+array[2].replace(/\s/g,'')+'()">'+array[2]+'</button><button class="tableTags" onclick="search'+array[3].replace(/\s/g,'')+'()">'+array[3]+'</button><button class="tableTags" onclick="search'+array[4].replace(/\s/g,'')+'()">'+array[4]+'</button><button class="tableTags" onclick="search'+array[5].replace(/\s/g,'')+'()">'+array[5]+'</button><button class="tableTags" onclick="search'+array[6].replace(/\s/g,'')+'()">'+array[6]+'</button><button class="tableTags" onclick="search'+array[7].replace(/\s/g,'')+'()">'+array[7]+'</button><button class="tableTags" onclick="search'+array[8].replace(/\s/g,'')+'()">'+array[8]+'</button>';}
							else if (array.length == 10){return '<button class="tableTags" onclick="search'+array[0].replace(/\s/g,'')+'()">'+array[0]+'</button><button class="tableTags" onclick="search'+array[1].replace(/\s/g,'')+'()">'+array[1]+'</button><button class="tableTags" onclick="search'+array[2].replace(/\s/g,'')+'()">'+array[2]+'</button><button class="tableTags" onclick="search'+array[3].replace(/\s/g,'')+'()">'+array[3]+'</button><button class="tableTags" onclick="search'+array[4].replace(/\s/g,'')+'()">'+array[4]+'</button><button class="tableTags" onclick="search'+array[5].replace(/\s/g,'')+'()">'+array[5]+'</button><button class="tableTags" onclick="search'+array[6].replace(/\s/g,'')+'()">'+array[6]+'</button><button class="tableTags" onclick="search'+array[7].replace(/\s/g,'')+'()">'+array[7]+'</button><button class="tableTags" onclick="search'+array[8].replace(/\s/g,'')+'()">'+array[8]+'</button><button class="tableTags" onclick="search'+array[9].replace(/\s/g,'')+'()">'+array[9]+'</button>';}
							else if (array.length == 11){return '<button class="tableTags" onclick="search'+array[0].replace(/\s/g,'')+'()">'+array[0]+'</button><button class="tableTags" onclick="search'+array[1].replace(/\s/g,'')+'()">'+array[1]+'</button><button class="tableTags" onclick="search'+array[2].replace(/\s/g,'')+'()">'+array[2]+'</button><button class="tableTags" onclick="search'+array[3].replace(/\s/g,'')+'()">'+array[3]+'</button><button class="tableTags" onclick="search'+array[4].replace(/\s/g,'')+'()">'+array[4]+'</button><button class="tableTags" onclick="search'+array[5].replace(/\s/g,'')+'()">'+array[5]+'</button><button class="tableTags" onclick="search'+array[6].replace(/\s/g,'')+'()">'+array[6]+'</button><button class="tableTags" onclick="search'+array[7].replace(/\s/g,'')+'()">'+array[7]+'</button><button class="tableTags" onclick="search'+array[8].replace(/\s/g,'')+'()">'+array[8]+'</button><button class="tableTags" onclick="search'+array[9].replace(/\s/g,'')+'()">'+array[9]+'</button><button class="tableTags" onclick="search'+array[10].replace(/\s/g,'')+'()">'+array[10]+'</button>';}							
	        		  		else{return '<button class="tableTags" onclick="search'+array[0]+'()">'+array[0]+'</button>';}
	        		  		  }},
    						
    						// CITY
	        		  {data: "City", "render": function ( data, type, row, meta ) {
	        		  		return '<a class="tableCity" onclick="search'+data.replace(/\s/g,'').replace(/,/g,"")+'()">'+data+'</a>';
    						  }},
    						
    						// COUNTRY
	        		  {data: "Country", "render": function ( data, type, row, meta ) {
	        		  		if(data == "Thailand"){return '<a onclick="search'+data+'()">'+data+' 🇹🇭</a>';}
	        		  		else if(data == "Indonesia"){return '<a onclick="search'+data+'()">'+data+' 🇮🇩</a>';}
	        		  		else{return '<a onclick="search'+data+'()">'+data+'</a>';}
    						  }},
    						
    						// CONTINENT
	        		  {data: "Continent", "render": function ( data, type, row, meta ) {   
	        		  		if(data == "Asia"){return '<a onclick="search'+data+'()">'+data+' 🌏</a>';}
	        		  		else if(data == "World"){return '<a onclick="search'+data+'()">'+data+' 🌎</a>';}
	        		  		else{return '<a onclick="search'+data+'()">'+data+'</a>';}
	        		  		}}]
	    });


 }, function (error) {
   console.log("Error: " + error.code);
}).then(function(){
    getFavicon();
    getCategoryIcons();
	getTagIcons();
	getCityIcons();
    addClearButton();    
});

});


function addClearButton(){
	$("#example_filter").append("<button class='clear-search-button' onclick='clearSearch()' style='margin-left:5px;color:blue;'>clear</button>")
	// $("#example_filter").append("<p style='margin-top:0px;margin-bottom:0px;color:grey;'>Ex: Bangkok Coworking<p>")
	$("#example_filter").append("<div id='empty-div' style='font-size:24px; float:left; margin-left:15px; display:none;'>All 💯</div>")
	$("input").attr("placeholder", "Ex: Bangkok Coworking");
}

function clearSearch(){
	$('#example').DataTable().search("").draw();
	$('#empty-div').html("All 💯")
	// getFavicon();

}

