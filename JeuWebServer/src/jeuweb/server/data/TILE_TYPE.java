package jeuweb.server.data;

public enum TILE_TYPE {
	MUD, GRASS, WALL, WATER, HOLE;

	public boolean in(TILE_TYPE... types) {
		for (TILE_TYPE type : types)
			if (this == type)
				return true;
		return false;
	}
}
