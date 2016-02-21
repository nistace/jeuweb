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
	
	$("#buttonLogin").click(function(){
		sfs.send(new SFS2X.Requests.System.LoginRequest("blobby"));
	});

	$("#buttonReady").click(function(){
		sfs.send(new SFS2X.Requests.System.ExtensionRequest("ready", {}, sfs.lastJoinedZone));
	});
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
	canvas.keypress(function(e){map_player_handle(e);e.stopPropagation();});
});


function onExtensionResponse(evt)
{
	var params = evt.params;
	var cmd = evt.cmd;
	if (cmd === "create_map")
	{		
		map_init(params["map"]);
		map_initialize();
	}
}

/**
 * on login successful > joining room
 **/
function onLogin(event)
{
	/*alert("Login successful!" +
		  "\n\tZone: " + event.zone +
		  "\n\tUser: " + event.user +
		  "\n\tData: " + event.data);*/
	// On rejoint la room
	joinLobbyRoom();
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
	if (sfs.lastJoinedRoom == null || sfs.lastJoinedRoom.name != CONST_ROOM_NAME)
		sfs.send(new SFS2X.Requests.System.JoinRoomRequest(CONST_ROOM_NAME));
}
