<script lang="ts">
  import type { BoardData } from '$lib/game-state.ts';

  export let data: BoardData = [];
</script>

<table>
{#each data as row}
  <tr>
  {#each row as cell}
    <td>
      {cell.value}
    </td>
  {/each}
  </tr>
{/each}
</table>
