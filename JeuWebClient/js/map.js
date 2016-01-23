/*
 * This file will contain the functions that initialize and handle
 * the map
 */

var stage;

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
	stage.uptade();
}

/**
 * This function draw the map
 */

function map_draw(backgroundSheet)
{
	var map = map_get_seable_map(10, 10);

	alert(map);
	for(var i = 0; i < map.lenght; i++)
	{
		for(var j = 0; j < map[0].lenght; j++)
		{
			var idx = map[i][j];
			var tile = new createjs.Sprite(backgroundSheet);
			tile.gotoAndStop(idx);
			tile.x = j.CASE_SIDE_SIZE;
			tile.y = i.CASE_SIDE_SIZE;
			stage.addChild(tile);
		}
	}
}

/**
 * This function return a portion of the map array corresponding
 * to the case which can be displayed on the user's screen
 */

function map_get_seable_map(posX, posY)
{
	var map = map_get_map();
	
	var lenghtX = map[0].lenght;
	var lenghtY = map.lenght;
	
	if(posX < 0 || posX > lenghtX)
		posX = Math.round((lenghtX)/2);
	if(posY < 0 || posY > lenghtY)
		posY = Math.round((lenghtY)/2);
	
	var startI = posX - (Math.round(((LINE_OF_SIGHT_LONG)/2)));
	if(startI < 0) startI = 0;
	var endI = posX + (Math.round(((LINE_OF_SIGHT_LONG)/2)));
	if(endI < lenghtX) endI = lenghtX;
	var startJ = posY - (Math.round(((LINE_OF_SIGHT_LARGE)/2)));
	if(startJ < 0) startJ = 0;
	var endJ = posY + (Math.round(((LINE_OF_SIGHT_LARGE)/2)));
	if(endJ < lenghtY) endJ = lenghtY;

	alert(LINE_OF_SIGHT_LONG + " " + LINE_OF_SIGHT_LARGE + " " +startI + " " + endI + " " + startJ + " " +endJ);
	var array = new Array();
	var x = y = 0;
	for(var i = startI; i < endI; i++)
	{
		array[x] = new Array();
		for(var j = startJ; j < endJ; j++)
		{
			array[x][y] = map[i][j];
			y++;
		}
		x++;
	}

	return array;
}

/**
 * This function return an array of integer
 */

function map_get_map()
{
	var map = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
	           [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],];
	return map;
}