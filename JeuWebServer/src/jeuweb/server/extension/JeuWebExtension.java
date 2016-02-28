package jeuweb.server.extension;

import java.awt.Color;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.extensions.SFSExtension;

import jeuweb.server.data.connection.JeuWebUser;
import jeuweb.server.data.game.GameMap;
import jeuweb.server.handlers.JoinRoomHandler;
import jeuweb.server.handlers.MoveHandler;
import jeuweb.server.handlers.ReadyHandler;

public class JeuWebExtension extends SFSExtension {

	private final String	version	= "0.0.1";
	private GameMap			map;
	private Collection<JeuWebUser> users;
	private List<Color> availableColors;
	
	private void initColors()
	{
		availableColors = new ArrayList<Color>();
		availableColors.add(Color.GREEN);
		availableColors.add(Color.RED);
		availableColors.add(Color.BLUE);
		availableColors.add(Color.YELLOW);
		availableColors.add(Color.WHITE);
		availableColors.add(Color.BLACK);
		availableColors.add(Color.ORANGE);
		availableColors.add(Color.GRAY);
		availableColors.add(Color.MAGENTA);
		availableColors.add(Color.PINK);
	}
	
	@Override 
	public void init() {
		trace("JeuWeb Extension for SFS2X started, rel. " + version);
		users = new ArrayList<JeuWebUser>();	
		initColors();
		addRequestHandler("movement", MoveHandler.class);
		addRequestHandler("ACCESS_LOG_ROOM", JoinRoomHandler.class);
		addRequestHandler("LOG_ROOM_READY", ReadyHandler.class);
	}

	public void start() {
		this.map = new GameMap(1);
		
	}

	public JeuWebUser addUser(User user) {
		JeuWebUser newUser = new JeuWebUser(user, availableColors.remove(0));
		this.users.add(newUser);
		return newUser;
	}

	public final Collection<JeuWebUser> getAllUsers() {
		return this.users;
	}

	public GameMap getMap() {
		return this.map;
	}
}
