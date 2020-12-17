
// GET FAVICONS FOR LISTS - LINKS
$("a[href^='http']").each(function() {

	// console.log($(this).find("li"));

	// console.log(this.href);
	// console.log(this.hostname);
	if (this.href.includes('https://www.youtube.com') == true){$(this).find("li").prepend('<img src="./img/youtube-icon.png" style="height:14px; margin-right:5px;margin-bottom:1px; ">');}
	// else if (this.href.includes('https://www.facebook.com') == true){$(this).find("li").prepend('<img src="./img/facebook-icon.png" style="height:16px; margin-right:4px;margin-bottom:0px; ">');}
	else if (this.href.includes('https://www.instagram.com') == true){$(this).find("li").prepend('<img src="./img/instagram-icon.png" style="height:14px; margin-right:5px;margin-bottom:1px; ">');}
	else if (this.href.includes('https://www.reddit.com') == true){$(this).find("li").prepend('<img src="./img/reddit-icon.png" style="height:17px; margin-right:5px;margin-bottom:0px; ">');}
	else if (this.href.includes('https://www.google.com/maps/') == true){$(this).find("li").prepend('<img src="./img/google-maps-icon.png" style="height:14px; margin-right:5px;margin-left:2px;margin-bottom:3px; ">');}
	else if (this.href.includes('https://www.google.com/travel/flights') == true){$(this).find("li").prepend('<img src="./img/google-flights-icon.png" style="height:17px; margin-right:5px;margin-bottom:0px; ">');}
	else if (this.href.includes('https://www.google.com/travel/') == true){$(this).find("li").prepend('<img src="./img/google-travel-icon.svg" style="height:17px; margin-right:5px;margin-left:-2px;margin-bottom:0px; ">');}
	else if (this.href.includes('https://keep.google.com/') == true){$(this).find("li").prepend('<img src="./img/google-keep-icon.jpg" style="height:17px; margin-right:5px;margin-left:-2px;margin-bottom:0px; ">');}
	// No favicon
	else if (this.href.includes('nexstand.com') == true){$(this).find("li").prepend('<span style="margin-right:5px"> 🔗</span>');}
	else if (this.href.includes('toggl.com') == true){$(this).find("li").prepend('<span style="margin-right:5px"> 🔗</span>');}
	else if (this.href.includes('awesome-remote-job') == true){$(this).find("li").prepend('<span style="margin-right:5px"> 🔗</span>');}
	else{$(this).find("li").prepend('<img src="https://www.google.com/s2/favicons?domain=' + this.hostname + '" style="height:16px; margin-right:5px;margin-bottom:2px; ">');}
});

// GET FAVICONS FOR TABLE - LINKS
function getFavicon(){
$("a[href^='http']").each(function() {	

	if (this.href.includes('https://www.youtube.com') == true){$(this).parent("td").prepend('<img class="table-links-favicon" src="./img/youtube-icon.png" >');}
	// else if (this.href.includes('https://www.facebook.com') == true){$(this).parent("td").prepend('<img src="./img/facebook-icon.png" style="height:16px; margin-right:4px;margin-bottom:0px; ">');}
	else if (this.href.includes('https://www.instagram.com') == true){$(this).parent("td").prepend('<img class="table-links-favicon" src="./img/instagram-icon.png">');}
	else if (this.href.includes('https://www.reddit.com') == true){$(this).parent("td").prepend('<img class="table-links-favicon" src="./img/reddit-icon.png">');}
	else if (this.href.includes('https://www.google.com/maps') == true){$(this).parent("td").prepend('<img class="table-links-favicon" src="./img/google-maps-icon.png" >');}
	else if (this.href.includes('https://www.google.com/travel/flights') == true){$(this).parent("td").prepend('<img class="table-links-favicon" src="./img/google-flights-icon.png">');}
	else if (this.href.includes('https://www.google.com/travel/') == true){$(this).parent("td").prepend('<img class="table-links-favicon" src="./img/google-travel-icon.svg" >');}
	else if (this.href.includes('https://keep.google.com/') == true){$(this).parent("td").prepend('<img class="table-links-favicon" src="./img/google-keep-icon.jpg">');}
	// No favicon
	else if (this.href.includes('nexstand.com') == true){$(this).parent("td").prepend('<span style="margin-right:5px"> 🔗</span>');}
	else if (this.href.includes('toggl.com') == true){$(this).parent("td").prepend('<span style="margin-right:5px"> 🔗</span>');}
	else if (this.href.includes('awesome-remote-job') == true){$(this).parent("td").prepend('<span style="margin-right:5px"> 🔗</span>');}
	else if (this.href.includes('https://connectinchiangmai.com/') == true){$(this).parent("td").prepend('<span style="margin-right:5px"> 🔗</span>');}

	else{$(this).parent("td").prepend('<img class="table-links-favicon" src="https://www.google.com/s2/favicons?domain=' + this.hostname + '" >');}
	});
};

// GET ICONS FOR TABLE - CATEGORIES
function getCategoryIcons(){
	$(".tableCategory").each(function() {	
		var text = $(this).text();
		// console.log(text);
		if(text == ""){$(this).remove()}
		else if(text == "Facebook Group"){$(this).before("<img class='table-category-image' src='../img/facebook-icon.png'>")}
		else if(text == "YouTube"){$(this).before("<img class='table-category-image' src='../img/youtube-icon.png'>")}
		else if(text == "Instagram"){$(this).before("<img class='table-category-image' src='../img/instagram-icon.png'>")}
		else if(text == "Pets"){$(this).before("🐾 ")}
		else if(text == "Places"){$(this).before("📍 ")}
		else if(text == "Vlog"){$(this).before("📹 ")}
		else if(text == "Jobs"){$(this).before("👔 ")}		

	});	
}	

// GET ICONS FOR TABLE - TAGS
function getTagIcons(){
$(".tableTags").each(function() {	
	var text = $(this).text();
	// console.log(text);
	if(text == ""){$(this).remove()}
	else if(text == "Accommodation"){$(this).append(" 🛏️")}
	else if(text == "Apartments"){$(this).append(" 🛏️")}	
	else if(text == "Couple"){$(this).append(" 👫")}	

	else if(text == "Digital Nomad"){$(this).append(" 👨‍💻")}
	else if(text == "Email Marketing"){$(this).append(" ✉️")}
	else if(text == "Expat"){$(this).append(" 🧍‍♂️")}		
	else if(text == "Fitness"){$(this).append(" 🏃")}
	else if(text == "Gym"){$(this).append(" 🏋️")}

	else if(text == "Jobs"){$(this).append(" 👔")}
	else if(text == "Muay Thai"){$(this).append(" 🥊")}

	else if(text == "Travel"){$(this).append(" 🗺️")}
	else if(text == "Passport"){$(this).append(" 🛂")}
	else if(text == "Pets"){$(this).append(" 🐾")}
	else if(text == "Visa"){$(this).append(" 🛂")}
	else if(text == "YouTube"){$(this).append("<img src='./img/youtube-icon.png' style='height:11px; margin-left:4px;margin-bottom:3px; '>")}
});
};


// GET ICONS FOR TABLE - CITIES
function getCityIcons(){
$(".tableCity").each(function() {	
	var text = $(this).text();
	// console.log(text);
	if(text == "Bangkok"){$(this).after(" 🛺");}
	else if(text == "Chiang Mai"){$(this).after(" 🐘");}
	else if(text == "Canggu, Bali"){$(this).after(" 🏝️");}
	else if(text == "Bali"){$(this).after(" 🏝️");}
});
};
