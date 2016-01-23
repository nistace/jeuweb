/*
 * This file will contain the functions that initialize and handle
 * the map
 */

var stage;
var player;
var playerPosX = 12;
var playerPosY = 8;
var map = null;

/**
 * This function initialize the map
 */

function map_handle()
{
	map_initialize();
}

/**
 * This function loads the sprite and draw the map
 */

function map_initialize()
{
	stage = new createjs.Stage("mainframe");
	
	// Background
	var backgroundSheet = new createjs.SpriteSheet({
		framerate 		: 30,
		"images" 		: ["./img/sprite/field/sprite_field.png"],
		"frames" 		: {
			"width" 	: 32,
			"height"	: 32,
			"regX"		: 0,
			"regY"		: 0,
			spacing		: 0,
			margin		: 0}
	});
	map_draw(backgroundSheet);
	
	// Joueur
	var playerSheet = new createjs.SpriteSheet({
		framerate 		: 30,
		"images"		: ["./img/sprite/character/sprite_character.png"],
		"frames"		: {
			"width"		: 32,
			"height"	: 32,
			"regX"		: 0,
			"regY"		: 0,
			spacing		: 0,
			margin 		: 0},
		"animations"	: {
			"idle"		: [0, 1, "idle", 0.2],
			"backward"	: [2, 4, "bacward", 0.2],
			"forward"	: [5, 7, "forward", 0.2],
			"left"		: [8, 10, "left", 0.2],
			"right"		: [11, 13, "right", 0.2]
		}
	});
	map_draw_player(playerSheet);
	
	map_set_ticker();
}

function map_player_handle(e)
{
	switch(e.which)
	{
		case KEY_Z :
				
			break;
		default : 
			break;
	}
	
	stage.update();
}

function map_player_mode_forward()
{
	player = new createjs.Sprite(playerSheet, "forward");
	player.x = player.x-1;
}

/**
 * This function draw the map
 */

function map_draw(backgroundSheet)
{
	var map = map_get_seable_map(-1, -1);
	if (map != null)
	{
		for(var i = 0; i < map.length; i++)
		{
			for(var j = 0; j < map[0].length; j++)
			{
				var idx = map[i][j];
				var tile = new createjs.Sprite(backgroundSheet);
				tile.gotoAndStop(idx);
				tile.x = j*CASE_SIDE_SIZE;
				tile.y = i*CASE_SIDE_SIZE;
				stage.addChild(tile);
			}
		}
	}
}

/**
 * This function draw the player's character on the map and start its animation
 * @param playerSheet
 */

function map_draw_player(playerSheet)
{
	player = new createjs.Sprite(playerSheet, "idle");
	player.x = Math.round((playerPosX*CASE_SIDE_SIZE));
	player.y = Math.round((playerPosY*CASE_SIDE_SIZE));
	stage.addChild(player);
}

/**
 * This function configure the ticker which provide a time interval
 * for updating the map
 */

function map_set_ticker()
{
	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	createjs.Ticker.addEventListener("tick", map_player_handle);
}

/**
 * This function return a portion of the map array corresponding
 * to the case which can be displayed on the user's screen
 */

function map_get_seable_map(posX, posY)
{
	var map = map_get_map();
	var array = null;
	if (map != null)
	{
		var lengthX = map[0].length;
		var lengthY = map.length;
		
		if(posX < 0 || posX > lengthX)
			posX = Math.round((lengthX)/2);
		if(posY < 0 || posY > lengthY)
			posY = Math.round((lengthY)/2);
		
		var startI = posY - (Math.round(((LINE_OF_SIGHT_LONG)/2)));
		if(startI < 0) startI = 0;
		
		var endI = posY + (Math.round(((LINE_OF_SIGHT_LONG)/2)));
		if(endI > lengthY) endI = lengthY-1;
		
		var startJ = posX - (Math.round(((LINE_OF_SIGHT_LARGE)/2)));
		if(startJ < 0) startJ = 0;
		
		var endJ = posX + (Math.round(((LINE_OF_SIGHT_LARGE)/2)));
		if(endJ > lengthX) endJ = lengthX-1;

		array = [];
		var x = y = 0;
		for(var i = startI; i < endI; i++)
		{
			array[x] = [];
			y = 0;
			for(var j = startJ; j < endJ; j++)
			{
				array[x][y] = map[i][j];
				y++;
			}
			x++;
		}
	}

	return array;
}

/**
 * initialize the map with the data given by the server
 */
function map_init(parsableString)
{
	map = JSON.parse(parsableString);
}

/**
 * This function return an array of integer
 */
function map_get_map()
{
	return map;
}