/*

Category Names

YouTube
Facebook Group
Instagram

Jobs

*/


function searchAll(){
$('#example').DataTable().search("").draw();
}

function searchCoworking(){
	if($('input').val() != 'Coworking'){$('#example').DataTable().search("Coworking").draw();$('input').val('Coworking');}
	else{$('#example').DataTable().search("").draw();$('input').val('');}	
}

function searchYouTube(){
	if($('input').val() != 'YouTube'){$('#example').DataTable().search("YouTube").draw();$('input').val('YouTube');}
	else{$('#example').DataTable().search("").draw();$('input').val('');}	
}

function searchFacebookGroup(){
	if($('input').val() != 'Facebook'){$('#example').DataTable().search("Facebook").draw();$('input').val('Facebook');$('#empty-div').html("Facebook <img class='buttonImage' src='../img/facebook-icon.png' style='height:20px;'>");}
	else{$('#example').DataTable().search("").draw();$('input').val('');$('#empty-div').html("All 💯")}	
}

function searchInstagram(){
	if($('input').val() != 'Instagram'){$('#example').DataTable().search("Instagram").draw();$('input').val('Instagram');}
	else{$('#example').DataTable().search("").draw();$('input').val('');}	
}

function searchJobs(){
	if($('input').val() != 'Jobs'){$('#example').DataTable().search("Jobs").draw();$('input').val('Jobs');}
	else{$('#example').DataTable().search("").draw();$('input').val('');}	
}