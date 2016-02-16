/*
$('.multiple-items').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3
			});

$('.single-item').slick();
*/

var section = document.getElementsByClassName("content");
var div = document.getElementsByClassName("divShow");

var m; //indice de la div

for(var i = 0; i< section.length; i++){
	section[i].addEventListener("click", active, false);
}

for(var k = 0; k < div.length; k++){
	div[k].style.display = "none";
}

function active(){
	m = 0;
	if(this.className != "content active"){
		this.className += " active";
		this.style.zIndex = "10";
		for(var j = 0; j< section.length; j++){
			if(section[j].className == "content"){
				if(m == j){
					m++;
				}
				section[j].className += " hide";
				section[j].style.zIndex = "0";
			}
		}
		setTimeout(function(){div[m].style.display = "block";}, 400);		
	}else {
		for(var j = 0; j< section.length; j++){
			section[j].className = "content";
			section[j].children.className = "hide";
			div[j].style.display = "none";
		}
	}	
}

function activate(here){
	m = 0;
	var aff = document.getElementById(here);
	if(aff.className != "content active"){
		aff.className += " active";
		aff.style.zIndex = "10";
		for(var j = 0; j< section.length; j++){
			if(section[j].className == "content"){
				if(m == j){
					m++;
				}
				section[j].className += " hide";
				section[j].style.zIndex = "0";
			}
		}
		setTimeout(function(){div[m].style.display = "block";}, 400);
	}else {
		for(var j = 0; j< section.length; j++){
			section[j].className = "content";
			section[j].children.className = "hide";
			div[j].style.display = "none";
		}
	}
}