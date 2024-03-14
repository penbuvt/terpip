import type { GameState } from './game-state.ts'
const BOARD_SIZE = 6;

export class Game {
  state: GameState;

  constructor() {
    this.state = {
      board: Array.from(
        Array(BOARD_SIZE),
        () => Array.from(
          Array(BOARD_SIZE),
          () => ({ value: 1, player: 0 })
        )
      ),
    };
  }
}

export default Game;
