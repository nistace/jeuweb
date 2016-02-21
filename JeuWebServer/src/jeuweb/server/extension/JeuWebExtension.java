package jeuweb.server.extension;

import java.util.List;

import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.extensions.SFSExtension;

import jeuweb.server.data.GameMap;
import jeuweb.server.handlers.MoveHandler;
import jeuweb.server.handlers.ReadyHandler;

public class JeuWebExtension extends SFSExtension {

	private final String	version	= "0.0.1";
	private GameMap			map;

	@Override
	public void init() {
		trace("JeuWeb Extension for SFS2X started, rel. " + version);
		addRequestHandler("move", MoveHandler.class);
		addRequestHandler("ready", ReadyHandler.class);
	}

	public void start() {
		this.map = new GameMap(1);
		
		ISFSObject respObj = new SFSObject();
		respObj.putUtfString("map", this.map.getLayerLeaves().get(0).toString());
		
		this.send("create_map", respObj, (List<User>) getParentZone().getUserList());
	}

}
