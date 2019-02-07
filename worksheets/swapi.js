$().ready(function(){ // window.onload....
	$("#swpeople").text("hola"); // innertextHTML
	$.get("http://51.144.236.83:8080/pokemons/3", function(data){
		$("#swpeople").text(data.name);
	}, "json");
});

/* lazy mode
$((function(){
	alert("hola");
});
*/