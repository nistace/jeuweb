package jeuweb.server.data.game;

public class GameMapTile {
	private final TILE_TYPE type;

	public GameMapTile(TILE_TYPE type) {
		this.type = type;
	}

	public boolean isObstacle() {
		return type.in(TILE_TYPE.HOLE, TILE_TYPE.WALL, TILE_TYPE.WATER);
	}

	public TILE_TYPE getType() {
		return type;
	}
}
