export type BoardData = Cell[][];

export interface Cell {
	value: number;
	player: number;
}

export interface GameState {
	board: BoardData;
}
