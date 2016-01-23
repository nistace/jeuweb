jQuery(document).ready(function(){
	// Base setup
	utils_setup();
	
	// Main menu
	var menu = jQuery("#main-menu");
	menu.dblclick(function(){menu_visibility_show(menu);});
	
	// Main menu buttons
	jQuery("#button-close").click(function(){menu_visibility_hide(menu);});
	
	// Keyboard events handling
	jQuery(document).keydown(function(e){keyboard_handle(e);});
});