package jeuweb.server.handlers;

import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.extensions.BaseClientRequestHandler;

import jeuweb.server.extension.JeuWebExtension;

public class ReadyHandler extends BaseClientRequestHandler {

	@Override
	public void handleClientRequest(User arg0, ISFSObject arg1) {
		JeuWebExtension gameExt = (JeuWebExtension) getParentExtension();
		gameExt.start();
	}

}
