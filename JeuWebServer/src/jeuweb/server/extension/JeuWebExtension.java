package jeuweb.server.extension;

import java.awt.Color;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.extensions.SFSExtension;

import jeuweb.server.data.connection.JeuWebUser;
import jeuweb.server.data.game.GameMap;
import jeuweb.server.handlers.JoinRoomHandler;
import jeuweb.server.handlers.MoveHandler;
import jeuweb.server.handlers.ReadyHandler;

public class JeuWebExtension extends SFSExtension {

	private final String version = "0.0.1";
	private GameMap map;
	private Collection<JeuWebUser> users;
	private List<Color> availableColors;

	public JeuWebUser addUser(User user) {
		JeuWebUser newUser = new JeuWebUser(user, this.availableColors.remove(0));
		this.users.add(newUser);
		return newUser;
	}

	public JeuWebUser findUser(User user) {

		JeuWebUser find = null;
		for (JeuWebUser jwuser : this.users)
			if (jwuser.getUser() == user)
				find = jwuser;
		return find;
	}

	public final Collection<JeuWebUser> getAllUsers() {
		return this.users;
	}

	public List<User> getAllUsersUser() {
		List<User> result = new ArrayList<User>();
		for (JeuWebUser user : this.users)
			result.add(user.getUser());
		return result;
	}

	public GameMap getMap() {
		return this.map;
	}

	@Override
	public void init() {
		this.trace("JeuWeb Extension for SFS2X started, rel. " + this.version);
		this.users = new ArrayList<JeuWebUser>();
		this.initColors();
		this.addRequestHandler("movement", MoveHandler.class);
		this.addRequestHandler("ACCESS_LOG_ROOM", JoinRoomHandler.class);
		this.addRequestHandler("LOG_ROOM_READY", ReadyHandler.class);
	}

	private void initColors() {
		this.availableColors = new ArrayList<Color>();
		this.availableColors.add(Color.GREEN);
		this.availableColors.add(Color.RED);
		this.availableColors.add(Color.BLUE);
		this.availableColors.add(Color.YELLOW);
		this.availableColors.add(Color.WHITE);
		this.availableColors.add(Color.BLACK);
		this.availableColors.add(Color.ORANGE);
		this.availableColors.add(Color.GRAY);
		this.availableColors.add(Color.MAGENTA);
		this.availableColors.add(Color.PINK);
	}

	public JeuWebUser removeUser(User user) {
		JeuWebUser toRemove = this.findUser(user);
		this.users.remove(toRemove);
		return toRemove;
	}

	public void start() {
		this.map = new GameMap(1);

	}
}
