var CASE_SIDE_SIZE = 32;
var LINE_OF_SIGHT_LONG = 0;
var LINE_OF_SIGHT_LARGE = 0;

jQuery(document).ready(function(){
	// Main elements
	var menu = jQuery("#main-menu");
	
	// Base setup
	utils_setup();
	
	// Main menu
	menu.click(function(){menu_visibility_show(menu);});
	
	// Main menu buttons
	jQuery("#button-close").click(function(e){menu_visibility_hide(menu);e.stopPropagation();});
	
	// Keyboard events handling
	jQuery(document).keydown(function(e){keyboard_handle(e);});
});