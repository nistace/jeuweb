package jeuweb.server.handlers;

import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSArray;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSArray;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.extensions.BaseClientRequestHandler;

import jeuweb.server.data.connection.JeuWebUser;
import jeuweb.server.extension.JeuWebExtension;

public class JoinRoomHandler extends BaseClientRequestHandler {
	
	@Override
	public void handleClientRequest(User user, ISFSObject arg1) {

		trace("JoinRoomHandler handleClientRequest " + user.getName());
		JeuWebExtension gameExt = (JeuWebExtension) getParentExtension();

		
		JeuWebUser newUser = gameExt.addUser(user);
		{ //answer to the new user
			ISFSObject respObj = new SFSObject();
			ISFSArray usersNames = new SFSArray();
			for (JeuWebUser oUser : gameExt.getAllUsers())
			{
				trace(" --- Send to new User : " + oUser.getUser().getName());
				ISFSArray array = new SFSArray();
				array.addUtfString(oUser.getUser().getName());
				usersNames.addUtfString(oUser.getUser().getName());
				array.addUtfString(oUser.getStatus().name());
				array.addUtfString(oUser.getColor().toString());
				respObj.putSFSArray("USR_" + oUser.getUser().getName(), array);
			}
			respObj.putSFSArray("USERS_NAMES", usersNames);
			gameExt.send("CONNECTION_SUCCESSFUL", respObj, user);
		}
		
		{ //notification to the other
			ISFSObject respObj = new SFSObject();
			ISFSArray array = new SFSArray();
			array.addUtfString(newUser.getUser().getName());
			array.addUtfString(newUser.getStatus().name());
			respObj.putSFSArray("USR_" + newUser.getUser().getName(), array);
			for (JeuWebUser oUser : gameExt.getAllUsers())
			{ 
				trace(" --- Send to " + oUser.getUser().getName() + " : " + newUser.getUser().getName());
				if (oUser != newUser)
					gameExt.send("CONNECTED_USER", respObj, oUser.getUser());
			}
		}
		
		
	}

}
