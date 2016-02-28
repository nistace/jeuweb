/*
 * This file will contain miscellaneous functions used
 * by other javascript scripts
 */

/**
 * This function execute all the setup operation at the opening
 * of the game. By example, resizing the canvas to the user window
 */

function utils_setup()
{
	utils_resize_canvas();	// Redimensionnement du canvas
	map_handle();			// Création de la map
}

/**
 * This function resize the canvas to the dimensions of the user's window and
 * sets the global varaibles lineOfSightLong et lineOfSightLarge
 */

function utils_resize_canvas()
{
	var width = jQuery(document).width();
	var left = width;
	width = width - ((width%CASE_SIDE_SIZE));
	left = ((left - width)/2);
	
	var height = jQuery(document).height();
	var top = height;
	height = height - ((height%CASE_SIDE_SIZE));
	top = ((top - height)/2);
	
	var canvas = jQuery("#mainframe");
	
	LINE_OF_SIGHT_LONG = (height/CASE_SIDE_SIZE);
	LINE_OF_SIGHT_LARGE = (width/CASE_SIDE_SIZE);
	
	canvas.css("height", height).css("width", width).attr("width", width).attr("height", height).css("margin-top", top).css("margin-left", left);
}

function utils_replace_elem_loading (elem)
{
	var div = $("<div>");
	div.addClass("loading");
	var img = $("<img/>");
	img.attr("src", "./img/loading.gif");
	div.append(img);
	div.append(" Chargement...")
	elem.before(div);
	elem.css("display", "none");
	div.append(elem)
}

function utils_cancel_replace_elem_loading (elem)
{
	var loading = elem.parent();
	loading.after(elem);
	loading.remove();
	elem.css("display", "");
}