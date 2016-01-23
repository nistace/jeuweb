/*
 * This file will contains the function which handle 
 * the keyboard event
 */

var KEY_ESC = 27;

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