
var images = ["images/green.png", "images/red.png", "images/blue.png"];
var current_active = 0;

function check_index(){
	if (current_active >= images.length) {
		current_active = 0;
	}
	else if (current_active < 0){
		current_active = images.length - 1;
	}
}


function auto_slide_switch () {
	current_active = current_active + 1;
	check_index();
	$("#carousel").css("background-image", "url(" + images[current_active] + ")");
}

function manual_slide_switch (direction){
	current_active = current_active + direction;
	check_index();
	$("#carousel").css("background-image", "url(" + images[current_active] + ")");
}
	 

$().ready(function(){ // window.onload....
	$("#carousel").css("background-image", "url(" + images[current_active] + ")");

	setInterval(function(){
		console.log(current_active);
		auto_slide_switch();
	}, 5000);

	$("#next").click(function(){
		console.log("click next");
		manual_slide_switch(1);
	});
	$("#prev").click(function(){
		console.log("click prev");
		manual_slide_switch(-1);
	});
});