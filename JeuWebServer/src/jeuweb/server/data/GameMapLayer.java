package jeuweb.server.data;

public class GameMapLayer {

	private final int				width;
	private final int				height;
	private final GameMapTile[][]	tiles;

	public GameMapLayer(int width, int height) {
		this.width = width;
		this.height = height;
		this.tiles = new GameMapTile[this.width][];
		for (int i = 0; i < this.width; ++i) {
			this.tiles[i] = new GameMapTile[this.height];
			for (int j = 0; j < this.height; ++j)
				this.tiles[i][j] = new GameMapTile(TILE_TYPE.MUD);
		}
	}
}
