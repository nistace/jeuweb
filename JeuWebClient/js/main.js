jQuery(document).ready(function(){
	// Base setup
	utils_setup();
	
	// Main menu
	var menu = jQuery("#main-menu");
	menu.click(function(){menu_visibility_show(menu);});
	
	// Main menu buttons
	jQuery("#button-close").click(function(e){menu_visibility_hide(menu);e.stopPropagation();});
	
	// Keyboard events handling
	jQuery(document).keydown(function(e){keyboard_handle(e);});
});