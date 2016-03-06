var CASE_SIDE_SIZE = 32;
var LINE_OF_SIGHT_LONG = 0;
var LINE_OF_SIGHT_LARGE = 0;
var CONST_ZONE_NAME = "jeuweb";
var CONST_ROOM_NAME = "test";
var CONST_HOST = "localhost";
var CONST_PORT = 8888;

var sfs = null;

$(document).ready(function(){
	// Configuration (valeurs par défaut)
	var config 		= {};
	config.host 	= CONST_HOST;
	config.port 	= CONST_PORT;
	config.useSSL 	= false;
	// On se connecte à une zone sur le serveur
	config.zone 	= CONST_ZONE_NAME;
	config.debug	= true;
	
	// Initialisation de la config
	sfs = new SmartFox(config);
	
	// Quand on se connectera, le serveur répondra sous forme d'événement > on ajoute une gestion des événements en cas de réussite et d'échec à sfs
	sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, onLoginError, this);
	sfs.addEventListener(SFS2X.SFSEvent.LOGIN, onLogin, this);
	sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, onExtensionResponse);
	
	// Connexion au serveur (Pas encore à la zone, pas encore de login)
	sfs.connect();
	
	$("#buttonLogin").click(sendLogin);
});

jQuery(document).ready(function(){
	// Main elements
	var menu = jQuery("#main-menu");
	var canvas = jQuery("#mainframe");
	
	// Base setup
	utils_setup();
	
	// Main menu
	menu.click(function(){menu_visibility_show(menu);});
	
	// Main menu buttons
	jQuery("#button-close").click(function(e){menu_visibility_hide(menu);e.stopPropagation();});
	
	// Keyboard events handling
	jQuery(document).keydown(function(e){keyboard_handle(e);});
	jQuery(document).keyup(function(e){keyboard_reset_animation(e);});
});


function onExtensionResponse(evt)
{
	var params = evt.params;
	var cmd = evt.cmd;
	switch(cmd)
	{		
		case "GAME_START" : 
			map_init(params["MAP"]);
			map_initialize();
			$("#game_screen").css("display", "");
			$("#connect_screen").css("display", "none");
			break;
		case "player_movement" : 
			alert(params["movement"]);
			break;
		case "CONNECTED_USER" : 
			cnct_addConnectedUser(evt.params);
			break;
		case "CONNECTION_SUCCESSFUL" : 
			cnct_drawConnectionScreen(evt.params);
			break;
		case "USR_STATUS" : 
			cnct_updateUserStatus(evt.params);
			break;
		default : break;
	}
}

function sendLogin()
{
	var login = $('#connect_name').val();
	if (!login)
		$('#connect_name').addClass("error");
	else
	{
		utils_replace_elem_loading($("#buttonLogin"));
		sfs.send(new SFS2X.Requests.System.LoginRequest(login));
	}	
}

/**
 * on login successful > joining room
 **/
function onLogin(event)
{
	if (sfs.lastJoinedRoom == null || sfs.lastJoinedRoom.name != CONST_ROOM_NAME)
		sfs.send(new SFS2X.Requests.System.JoinRoomRequest(CONST_ROOM_NAME));
	sfs.send( new SFS2X.Requests.System.ExtensionRequest("ACCESS_LOG_ROOM", {}, sfs.lastJoinedZone) )
}

/**
 * on login failed
 **/
function onLoginError(event)
{
	alert("Login error: " + event.errorMessage + " (code " + event.errorCode + ")");
}


function joinLobbyRoom()
{
}
