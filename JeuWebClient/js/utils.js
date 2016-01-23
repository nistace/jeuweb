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
	utils_resize_canvas();
}

/**
 * This function resize the canvas to the dimensions of the user's window
 */

function utils_resize_canvas()
{
	var width = jQuery(document).width() - 10;
	var height = jQuery(document).height() - 10;
	var canvas = jQuery("#mainframe");
	
	canvas.css("height", height).css("width", width);
}