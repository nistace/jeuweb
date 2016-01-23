package jeuweb.server.data;

public class GameMapTile {
	private final TILE_TYPE type;

	public GameMapTile(TILE_TYPE type) {
		this.type = type;
	}

	public boolean isObstacle() {
		return type.in(TILE_TYPE.HOLE, TILE_TYPE.WALL, TILE_TYPE.WATER);
	}
}