jQuery(document).ready(function(){
	// Setup de base
	utils_setup();
	
	// Menu principal
	var menu = jQuery("#main-menu");
	menu.click(function(){menu_visibility_handle(menu);});
});