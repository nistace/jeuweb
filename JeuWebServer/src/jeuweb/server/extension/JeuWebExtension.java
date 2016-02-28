package jeuweb.server.extension;

import java.awt.Color;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.extensions.SFSExtension;

import jeuweb.server.data.connection.JeuWebUser;
import jeuweb.server.data.game.GameMap;
import jeuweb.server.handlers.JoinRoomHandler;
import jeuweb.server.handlers.MoveHandler;

public class JeuWebExtension extends SFSExtension {

	private final String	version	= "0.0.1";
	private GameMap			map;
	private Collection<JeuWebUser> users;
	private List<Color> availableColors;
	
	private void initColors()
	{
		availableColors = new ArrayList<Color>();
		availableColors.add(Color.BLACK);
	}
	
	@Override 
	public void init() {
		trace("JeuWeb Extension for SFS2X started, rel. " + version);
		users = new ArrayList<JeuWebUser>();	
		initColors();
		addRequestHandler("move", MoveHandler.class);
		addRequestHandler("ACCESS_LOG_ROOM", JoinRoomHandler.class);
	}

	public void start() {
		this.map = new GameMap(1);
		
		ISFSObject respObj = new SFSObject();
		respObj.putUtfString("map", this.map.getLayerLeaves().get(0).toString());
		
		this.send("create_map", respObj, (List<User>) getParentZone().getUserList());
	}
	
	public void movements()
	{
		ISFSObject respObj = new SFSObject();
		respObj.putUtfString("movement", "Player has moved");
		this.send("player_movement", respObj, (List<User>) getParentZone().getUserList());
	}

	public JeuWebUser addUser(User user) {
		JeuWebUser newUser = new JeuWebUser(user, Color.BLACK);
		this.users.add(newUser);
		return newUser;
	}

	public final Collection<JeuWebUser> getAllUsers() {
		return this.users;
	}
}
