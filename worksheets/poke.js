var val = 1;

// input=0 arrows, input=1 button.
function get_url(val, input) {
	var url;
	if($.isNumeric(val) && input == 1) { 
		url = "http://51.144.236.83:8080/pokemons?num=";
		$.get(url + val, function(data){
			data = data[0];
			get_data(data);
		}, "json");
	}
	else if (typeof val == 'string' && input == 1) { 
		url = "http://51.144.236.83:8080/pokemons?name=";
		$.get(url + val, function(data){
			data = data[0];
			get_data(data);
		}, "json");
	}
	else{ 
		url = "http://51.144.236.83:8080/pokemons/";
		$.get(url + val, function(data){
			get_data(data);
		}, "json")
		.fail(function(){
			get_data("");
		});
	}
}




function get_data(data) {
	console.log(data);
	$("li").remove();
	if(data == ""){
		$("#code").text("no data");
		$("#normal_sprite").attr('src',"");
		$("#shiny_sprite").attr('src',"");
		$("#name").text("no data");
		$("#HM").text("no data");
		$("#lista").append("<li>" + "no data" + "</li>");
	}
	else{
		$("#code").text(data.num);
		$("#normal_sprite").attr('src',data.images[0].front);
		$("#shiny_sprite").attr('src',data.images[1].front_shiny);
		$("#name").text(data.name);
		data.types.forEach(function(elem){
			$("#lista").append("<li>" + elem.type.name + "</li>");
		});
		if(data.moves.HM == null) $("#HM").text("null");
		else $("#HM").text(data.moves.HM);	
		val = data.id;
	}
}

function check(){
	if(val > 6) val = 1;
	else if (val < 1) val = 6;
}



$().ready(function(){ // window.onload....
	get_url(val, 0);
	$("#next").click(function(){
		console.log("click next");
		val = val + 1;
		check();
		get_url(val, 0);
	});
	$("#prev").click(function(){
		console.log("click prev");
		val = val - 1;
		check();
		get_url(val, 0);
	});
	$("#btn").click(function(){
    	var val = $("#input_bar").val();
   		console.log(val);
   		get_url(val, 1);
  	});
});