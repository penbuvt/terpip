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
      players: 2,
      activePlayer: 1,
    };
  }

  move(row: number, col: number) {
    const cell = this.state.board[row][col];
    cell.value++;
    cell.player = this.state.activePlayer;

    // advance to next player
    this.state.activePlayer = this.state.activePlayer % this.state.players + 1;
  }
}

export default Game;
