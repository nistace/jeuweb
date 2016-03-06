package jeuweb.server.handlers;

import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.extensions.BaseClientRequestHandler;

import jeuweb.server.data.connection.JeuWebUser;
import jeuweb.server.extension.JeuWebExtension;

public class ReadyHandler extends BaseClientRequestHandler {

	@Override
	public void handleClientRequest(User user, ISFSObject data) {
		this.trace("ReadyHandler handleClientRequest " + user.getName());
		JeuWebExtension gameExt = (JeuWebExtension) this.getParentExtension();

		JeuWebUser jwuser = gameExt.findUser(user);
		jwuser.ready(data.getBool("ready"));

		{
			this.trace("ReadyHandler send everyone that the status change");
			ISFSObject respObj = new SFSObject();
			respObj.putUtfString("USR", user.getName());
			respObj.putUtfString("STATUS", jwuser.getStatus().name());
			this.send("USR_STATUS", respObj, gameExt.getAllUsersUser());
		}

		this.trace("ReadyHandler test everyone is ready");
		boolean allReady = true;
		for (JeuWebUser jw : gameExt.getAllUsers())
			allReady &= jw.isReady();
		if (allReady) {
			this.trace("ReadyHandler everyone is ready");
			gameExt.start();

			ISFSObject respObj = new SFSObject();
			respObj.putUtfString("MAP", gameExt.getMap().getLayerLeaves().get(0).toString());

			this.send("GAME_START", respObj, gameExt.getAllUsersUser());
		}
	}
}
