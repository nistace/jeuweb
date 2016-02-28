package jeuweb.server.data.game;

import java.util.List;

import jeuweb.server.utils.JeuWebConsts;

public class GameMap {
	private final int			height;
	private final GameMapLayer	finalLayer;

	public GameMap(int height) {
		this.height = height;
		this.finalLayer = new GameMapLayer(JeuWebConsts.LAYER_WIDTH, JeuWebConsts.LAYER_HEIGHT, null);
		GameMapLayer father = this.finalLayer;
		for (int i = 1; i < this.height; ++i) {
			father = father.addChild(new GameMapLayer(JeuWebConsts.LAYER_WIDTH, JeuWebConsts.LAYER_HEIGHT, father));
		}
	}

	public List<GameMapLayer> getLayerLeaves() {
		return this.finalLayer.getLeaves();
	}
}
