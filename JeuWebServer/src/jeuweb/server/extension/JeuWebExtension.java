package jeuweb.server.extension;

import com.smartfoxserver.v2.extensions.SFSExtension;

import jeuweb.server.handlers.MoveHandler;

public class JeuWebExtension extends SFSExtension {

	private final String version = "0.0.1";

	@Override
	public void init() {
		trace("JeuWeb Extension for SFS2X started, rel. " + version);
		addRequestHandler("move", MoveHandler.class);
	}

}
