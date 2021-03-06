package jeuweb.server.handlers;

import java.util.List;

import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.extensions.BaseClientRequestHandler;

import jeuweb.server.extension.JeuWebExtension;

public class MoveHandler extends BaseClientRequestHandler {

	@Override
	public void handleClientRequest(User arg0, ISFSObject arg1) {
		JeuWebExtension gameExt = (JeuWebExtension) this.getParentExtension();
		ISFSObject respObj = new SFSObject();
		respObj.putUtfString("movement", "Player has moved");
		gameExt.send("player_movement", respObj, (List<User>) gameExt.getParentZone().getUserList());
	}
}
