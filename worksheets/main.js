window.onload = function(){
	var menu_item = document.getElementsByClassName("button_menu");
	menu_item[1].onmouseover = function() {
		document.getElementById("list_menu").style.height = '200px';
		document.getElementById("list_menu").style.backgroundColor = "rgb(255, 242, 204)";
		document.getElementById("submenu_bar").style.top = '243px';
		///*
		document.getElementById("prod_list_menu").style.opacity = '1';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';
		//*/
		document.getElementById("prod_list_menu").style.display = "grid";
		document.getElementById("brand_list_menu").style.display = "none";
		document.getElementById("news_list_menu").style.display = "none";
		document.getElementById("contact_list_menu").style.display = "none";

	};
	menu_item[2].onmouseover = function() {
		document.getElementById("list_menu").style.height = '200px';
		document.getElementById("list_menu").style.backgroundColor = "rgb(204, 255, 255)";
		document.getElementById("submenu_bar").style.top = '243px';
		///*
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '1';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';
		//*/
		document.getElementById("prod_list_menu").style.display = "none";
		document.getElementById("brand_list_menu").style.display = "grid";
		document.getElementById("news_list_menu").style.display = "none";
		document.getElementById("contact_list_menu").style.display = "none";
	};
	menu_item[3].onmouseover = function() {
		document.getElementById("list_menu").style.height = '200px';
		document.getElementById("list_menu").style.backgroundColor = "rgb(255, 204, 230)";
		document.getElementById("submenu_bar").style.top = '243px';
		///*
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '1';
		document.getElementById("contact_list_menu").style.opacity = '0';
		//*/
		document.getElementById("prod_list_menu").style.display = "none";
		document.getElementById("brand_list_menu").style.display = "none";
		document.getElementById("news_list_menu").style.display = "grid";
		document.getElementById("contact_list_menu").style.display = "none";
	};
	menu_item[4].onmouseover = function() {
		document.getElementById("list_menu").style.height = '200px';
		document.getElementById("list_menu").style.backgroundColor = "rgb(217, 255, 204)";
		document.getElementById("submenu_bar").style.top = '243px';
		///*
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '1';
		//*/
		document.getElementById("prod_list_menu").style.display = "none";
		document.getElementById("brand_list_menu").style.display = "none";
		document.getElementById("news_list_menu").style.display = "none";
		document.getElementById("contact_list_menu").style.display = "grid";
	};
	menu_item[0].onmouseover = function() {
		document.getElementById("list_menu").style.height = '0px';
		document.getElementById("submenu_bar").style.top = '-43px';
		///*
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';
		//*/
		document.getElementById("prod_list_menu").style.display = "none";
		document.getElementById("brand_list_menu").style.display = "none";
		document.getElementById("news_list_menu").style.display = "none";
		document.getElementById("contact_list_menu").style.display = "none";

	};
	menu_item[5].onmouseover = function() {
		document.getElementById("list_menu").style.height = '0px';
		document.getElementById("submenu_bar").style.top = '43px';
		///*
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';
		//*/
		document.getElementById("prod_list_menu").style.display = "none";
		document.getElementById("brand_list_menu").style.display = "none";
		document.getElementById("news_list_menu").style.display = "none";
		document.getElementById("contact_list_menu").style.display = "none";
	};
	document.getElementById("header").onmouseover = function() {
		document.getElementById("list_menu").style.height = '0px';
		document.getElementById("submenu_bar").style.top = '43px';
		///*
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';
		//*/
		document.getElementById("prod_list_menu").style.display = "none";
		document.getElementById("brand_list_menu").style.display = "none";
		document.getElementById("news_list_menu").style.display = "none";
		document.getElementById("contact_list_menu").style.display = "none";

	};
	document.getElementById("sec").onmouseover = function() {
		document.getElementById("list_menu").style.height = '0px';
		document.getElementById("submenu_bar").style.top = '43px';
		///*
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';
		//*/
		document.getElementById("prod_list_menu").style.display = "none";
		document.getElementById("brand_list_menu").style.display = "none";
		document.getElementById("news_list_menu").style.display = "none";
		document.getElementById("contact_list_menu").style.display = "none";

	};
	var not_menu_elem = document.getElementsByClassName("not_menu");
	//???

	var slideIndex = 1;
	showSlides(slideIndex);
	showSlidesAuto();

		window.plusSlides = plusSlides; //make it global
		// Next/previous controls
		function plusSlides(n) {
  			showSlides(slideIndex += n);
		}

		window.currentSlide = currentSlide;
		// Thumbnail image controls
		function currentSlide(n) {
  			showSlides(slideIndex = n);
		}

		function showSlides(n) {
  			var i;
  			var slides = document.getElementsByClassName("slide");
  			if (n > slides.length) {slideIndex = 1} 
  			if (n < 1) {slideIndex = slides.length}
  			for (i = 0; i < slides.length; i++) {
  		    	slides[i].style.display = "none"; 
  		    }
  			slides[slideIndex-1].style.display = "block"; 

  		}
  		function showSlidesAuto() {
  			var i;
  			var slides = document.getElementsByClassName("slide");
  			for (i = 0; i < slides.length; i++) {
    			slides[i].style.display = "none"; 
  			}
  			slideIndex++;
  			if (slideIndex > slides.length) {slideIndex = 1} 
  			slides[slideIndex-1].style.display = "block"; 
  			setTimeout(showSlidesAuto, 5000); // Change image every 2 seconds
		}
}