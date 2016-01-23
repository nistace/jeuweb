package jeuweb.server.handlers;

import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.extensions.BaseClientRequestHandler;

import jeuweb.server.extension.JeuWebExtension;

public class MoveHandler extends BaseClientRequestHandler {

	@Override
	public void handleClientRequest(User arg0, ISFSObject arg1) {
		JeuWebExtension gameExt = (JeuWebExtension) getParentExtension();
		ISFSObject respObj = new SFSObject();
		gameExt.send(arg0.getName(), respObj, arg0);
	}

}
