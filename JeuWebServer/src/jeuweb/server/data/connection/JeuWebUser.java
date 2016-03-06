package jeuweb.server.data.connection;

import java.awt.Color;

import com.smartfoxserver.v2.entities.User;

public class JeuWebUser {

	private final User	user;
	private USER_STATUS	status;
	private Color		color;

	public JeuWebUser(User user, Color color) {
		this.user = user;
		this.status = USER_STATUS.LOGGED;
		this.color = color;
	}

	public Color getColor() {
		return this.color;
	}

	public USER_STATUS getStatus() {
		return this.status;
	}

	public User getUser() {
		return this.user;
	}

	public boolean isReady() {
		return this.status == USER_STATUS.READY;
	}

	public void ready(boolean flag) {
		if (flag)
			this.status = USER_STATUS.READY;
		else
			this.status = USER_STATUS.READY;
	}

	public void setColor(Color color) {
		this.color = color;
	}
}
