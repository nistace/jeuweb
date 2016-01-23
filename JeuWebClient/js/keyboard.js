/*
 * This file will contains the function which handle 
 * the keyboard event
 */

var KEY_ESC 	= 27;
var KEY_Z 		= 90;
var KEY_S		= 83;
var KEY_D		= 68;
var KEY_Q		= 81;

/**
 * This function handles the events which occurs on the document
 * @param e
 */

function keyboard_handle(e)
{
	switch(e.which)
	{
		case KEY_ESC : 
			menu_visibility_handle(jQuery("#main-menu"));
			break;
		default : 
			break;
	}
}