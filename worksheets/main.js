window.onload = function(){
	var menu_item = document.getElementsByClassName("button_menu");
	menu_item[1].onmouseover = function() {
		document.getElementById("list_menu").style.height = '200px';
		document.getElementById("list_menu").style.backgroundColor = "rgb(255, 242, 204)";
		document.getElementById("submenu_bar").style.top = '243px';
		document.getElementById("prod_list_menu").style.opacity = '1';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';

	};
	menu_item[2].onmouseover = function() {
		document.getElementById("list_menu").style.height = '200px';
		document.getElementById("list_menu").style.backgroundColor = "rgb(204, 255, 255)";
		document.getElementById("submenu_bar").style.top = '243px';
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '1';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';
	};
	menu_item[3].onmouseover = function() {
		document.getElementById("list_menu").style.height = '200px';
		document.getElementById("list_menu").style.backgroundColor = "rgb(255, 204, 230)";
		document.getElementById("submenu_bar").style.top = '243px';
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '1';
		document.getElementById("contact_list_menu").style.opacity = '0';
	};
	menu_item[4].onmouseover = function() {
		document.getElementById("list_menu").style.height = '200px';
		document.getElementById("list_menu").style.backgroundColor = "rgb(217, 255, 204)";
		document.getElementById("submenu_bar").style.top = '243px';
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '1';
	};
	menu_item[0].onmouseover = function() {
		document.getElementById("list_menu").style.height = '0px';
		document.getElementById("submenu_bar").style.top = '-243px';
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';

	};
	menu_item[5].onmouseover = function() {
		document.getElementById("list_menu").style.height = '0px';
		document.getElementById("submenu_bar").style.top = '-243px';
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';
	};
	document.getElementById("header").onmouseover = function() {
		document.getElementById("list_menu").style.height = '0px';
		document.getElementById("submenu_bar").style.top = '-243px';
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';

	};
	document.getElementById("sec").onmouseover = function() {
		document.getElementById("list_menu").style.height = '0px';
		document.getElementById("submenu_bar").style.top = '-244px';
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';

	};
}