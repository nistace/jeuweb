package jeuweb.server.data.game;

import java.util.ArrayList;
import java.util.List;

public class Team {

	private final List<Dwarf>	dwarves;
	private final List<God>		gods;

	public Team() {
		this.dwarves = new ArrayList<Dwarf>();
		this.gods = new ArrayList<God>();
	}

	public List<Dwarf> getDwarves() {
		return dwarves;
	}

	public List<God> getGods() {
		return gods;
	}
}
