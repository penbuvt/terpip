<script lang="ts">
  import Grid from './Grid.svelte';
  import { Game } from './terpip-engine';

  let game = new Game();

  function handlePlayerMove({ detail: { row, col }}) {
    game.move(row, col);
    game = game;
  }
</script>

<Grid
  data={game.state.board}
  on:playerMove={handlePlayerMove}
/>
