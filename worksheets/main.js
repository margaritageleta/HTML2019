window.onload = function(){
	var menu_item = document.getElementsByClassName("button_menu");
	menu_item[1].onmouseover = function() {
		document.getElementById("list_menu").style.height = '100px';
		document.getElementById("list_menu").style.backgroundColor = "rgb(255, 242, 204)";
		//document.getElementById("submenu_bar").style.top = '100px';
	};
	menu_item[2].onmouseover = function() {
		document.getElementById("list_menu").style.height = '100px';
		document.getElementById("list_menu").style.backgroundColor = "rgb(204, 255, 255)";
	};
	menu_item[3].onmouseover = function() {
		document.getElementById("list_menu").style.height = '100px';
		document.getElementById("list_menu").style.backgroundColor = "rgb(255, 204, 230)";
	};
	menu_item[4].onmouseover = function() {
		document.getElementById("list_menu").style.height = '100px';
		document.getElementById("list_menu").style.backgroundColor = "rgb(217, 255, 204)";
	};
	menu_item[0].onmouseover = function() {
		document.getElementById("list_menu").style.height = '0px';
	};
	menu_item[5].onmouseover = function() {
		document.getElementById("list_menu").style.height = '0px';
	};
	document.getElementById("list_menu").onmouseout = function() {
		document.getElementById("list_menu").style.height = '0px';
	};
	document.getElementById("header").onmouseover = function() {
		document.getElementById("list_menu").style.height = '0px';
	};


}