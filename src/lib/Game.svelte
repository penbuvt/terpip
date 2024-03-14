<script lang="ts">
  import Grid from './Grid.svelte';
  import { Game } from './terpip-engine';

  let game = new Game();
</script>

<Grid data={game.state.board} />
