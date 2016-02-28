/*
 * This file will contains the function which handle 
 * the keyboard event
 */

var KEY_ESC 	= 27;
var KEY_Z 		= 90;
var KEY_S		= 83;
var KEY_D		= 68;
var KEY_Q		= 81;
var KEY_L		= 76;
var KEY_R		= 82;

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
		case KEY_Z :
			map_player_move_forward();
			break;
		case KEY_S :
			map_player_move_backward();
			break;
		case KEY_D :
			map_player_move_right();
			break;
		case KEY_Q :
			map_player_move_left();
			break;
		//case KEY_L :
		//	sfs.send(new SFS2X.Requests.System.LoginRequest("blobby"));
		//	break;
		//case KEY_R :
		//	sfs.send(new SFS2X.Requests.System.ExtensionRequest("ready", {}, sfs.lastJoinedZone));
		//	break;
		default : 
			break;
	}
}