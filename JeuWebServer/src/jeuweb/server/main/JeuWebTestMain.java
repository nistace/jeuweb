package jeuweb.server.main;

import jeuweb.server.data.GameMap;

public class JeuWebTestMain {
	public static void main(String[] args) {
		System.out.println(new GameMap(1).getLayerLeaves().get(0).toString());
	}
}
