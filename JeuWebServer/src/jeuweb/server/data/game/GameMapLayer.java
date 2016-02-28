package jeuweb.server.data.game;

import java.util.ArrayList;
import java.util.List;

public class GameMapLayer {

	private final int					width;
	private final int					height;
	private final GameMapTile[][]		tiles;
	private final List<GameMapLayer>	sons;
	private final GameMapLayer			father;

	public GameMapLayer(int width, int height, GameMapLayer father) {
		this.width = width;
		this.height = height;
		this.tiles = new GameMapTile[this.height][];
		for (int i = 0; i < this.height; ++i) {
			this.tiles[i] = new GameMapTile[this.width];
			for (int j = 0; j < this.width; ++j)
				this.tiles[i][j] = new GameMapTile(Math.random() < .2D ? TILE_TYPE.MUD : TILE_TYPE.GRASS);
		}
		this.father = father;
		this.sons = new ArrayList<GameMapLayer>();
	}

	public GameMapLayer addChild(GameMapLayer son) {
		this.sons.add(son);
		return son;
	}

	public List<GameMapLayer> getLeaves() {
		List<GameMapLayer> result = new ArrayList<GameMapLayer>();
		if (this.sons.isEmpty())
			result.add(this);
		else
			for (GameMapLayer son : this.sons)
				result.addAll(son.getLeaves());
		return result;
	}

	public String toString() {
		StringBuffer toStr = new StringBuffer();
		toStr.append("[");
		boolean comaA = false;
		for (GameMapTile[] line : this.tiles) {
			if (comaA)
				toStr.append(",");
			else
				comaA = true;
			toStr.append("[");
			boolean comaS = false;
			;
			for (GameMapTile tile : line) {
				if (comaS)
					toStr.append(",");
				else
					comaS = true;
				toStr.append(tile.getType().ordinal());
			}
			toStr.append("]");
		}
		toStr.append("]");
		return toStr.toString();
	}

	public GameMapLayer getFather() {
		return father;
	}
}
