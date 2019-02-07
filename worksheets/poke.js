var id = 1;

function get_search_data(val) {
	console.log(val);
	var url;
	if($.isNumeric(val)) url = "http://51.144.236.83:8080/pokemons?num=";
	else url = "http://51.144.236.83:8080/pokemons?name=";
	$.get(url + val, function(data){
		id = data[0].id;
		get_data(id);
	}, "json");
}

function get_data(id) {
	console.log(id);
	$("li").remove();
	$.get("http://51.144.236.83:8080/pokemons/" + id, function(data){
		if(data == ""){
			$("#code").text("no data");
			$("#name").text("no data");
			$("#HM").text("no data");
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
		}
	}, "json");
}

function check(){
	if(id > 6) id = 1;
	else if (id < 1) id = 6;
}



$().ready(function(){ // window.onload....
	get_data(id);
	$("#next").click(function(){
		console.log("click next");
		id = id + 1;
		check();
		get_data(id);
	});
	$("#prev").click(function(){
		console.log("click prev");
		id = id - 1;
		check();
		get_data(id);
	});
	$("#btn").click(function(){
    	var get_val = $("#input_bar").val();
   		console.log(get_val);
   		get_search_data(get_val);
  	});
});