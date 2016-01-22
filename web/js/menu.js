/*
 * This file will contain the functions related to the
 * menu's utilisation
 */

/**
 * This function handle the visibility as the user
 * click on the side bar or the close button.
 */

function menu_visibility_handle(menu)
{	
	if(menu.css("width") == "6px")
		menu_visibility_show(menu);
	else
		menu_visibility_hide(menu);
}

/**
 * This function show the main menu
 * @param menu
 */

function menu_visibility_show(menu)
{
	menu.css('background-image', 'url("./img/main_menu_left_arrow.png")');
	menu.animate({
		width : "200px"
	}, 600);
}

/**
 * this function hide the main menu
 * @param menu
 */

function menu_visibility_hide(menu)
{
	menu.css('background-image', 'url("./img/main_menu_right_arrow.png")');
	menu.animate({
		width : "6px"
	}, 600);
}