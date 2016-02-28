package jeuweb.server.data.connection;

import java.awt.Color;

import com.smartfoxserver.v2.entities.User;

public class JeuWebUser {

	private final User user;
	private USER_STATUS status;
	private Color color;
	
	
	public JeuWebUser(User user, Color color) {
		this.user = user;
		this.status = USER_STATUS.LOGGED;
		this.color = color;
	}
	
	public boolean isReady()
	{
		return this.status == USER_STATUS.READY;
	}
	
	public void ready()
	{
		this.status = USER_STATUS.READY;
	}
	
	public User getUser()
	{
		return this.user;
	}

	public USER_STATUS getStatus() {
		return status;
	}
	
	public Color getColor()
	{
		return this.color;
	}
	
	public void setColor(Color color)
	{
		this.color = color;
	}
}
