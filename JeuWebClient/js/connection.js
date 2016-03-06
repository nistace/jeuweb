/** Connection.js : Functions managing the connection screen */

function cnct_drawConnectionScreen(parameters)
{
	var div = $("<table></table>");
	div.addClass("connection");
	var count = 4;
	var line = $("<tr></tr>");
	for (i = 0 ; i <= count ; ++i)
		line.append($("<td></td>"));
	div.append(line);
	parameters["USERS_NAMES"].forEach(function(elem){
		if (count == 4)
		{
			line = $("<tr></tr>");
			div.append(line);
			count = 0;
		}
		else count++;
		
		var user = $("<td></td>");
		user.attr("id", "cnct_usr_" + elem);
		user.addClass("user");
		user.addClass(parameters["USR_" + elem][1]);
		
		var usStatus = $("<div></div>");
		usStatus.addClass("status");
		usStatusImg = $("<img/>");
		usStatusImg.attr("src", "./img/connection/dude.png");
		usStatus.append(usStatusImg);
		
		var usName = $("<div></div>");
		usName.addClass("name");
		usName.append(parameters["USR_" + elem][0]);
		
		user.append(usStatus);
		user.append(usName);
		
		line.append(user);
	});
	
	$("#connect_main_box").empty();
	$("#connect_main_box").append(div);
	
	var buttonReady = $("<button></button>");
	buttonReady.append("Prêt");
	buttonReady.attr("id", "buttonReady");
	buttonReady.addClass("primary");
	buttonReady.click(function(){sfs.send(new SFS2X.Requests.System.ExtensionRequest("LOG_ROOM_READY", {ready:true}, sfs.lastJoinedZone));});
	
	$("#connect_main_box").append(buttonReady);
}

function cnct_addConnectedUser(parameters)
{
	var lastline = $("#connect_main_box").find("table").find("tr").last();
	if (lastline.length == 5)
	{
		var newLine = $("<tr></tr>");
		lastline.after(newLine);
		lastline = newLine;
	}
	
	var user = $("<td></td>");
	user.attr("id", "cnct_usr_" + parameters["USR"][0]);
	user.addClass("user");
	user.addClass(parameters["USR"][1]);
	
	var usStatus = $("<div></div>");
	usStatus.addClass("status");
	usStatusImg = $("<img/>");
	usStatusImg.attr("src", "./img/connection/dude.png");
	usStatus.append(usStatusImg);
	
	var usName = $("<div></div>");
	usName.addClass("name");
	usName.append(parameters["USR"][0]);
	
	user.append(usStatus);
	user.append(usName);
	
	lastline.append(user);
}

function cnct_updateUserStatus(parameters)
{
	var user = $("#cnct_usr_" + parameters["USR"]);
	user.removeClass();
	user.addClass("user");
	user.addClass(parameters["STATUS"]);	
}