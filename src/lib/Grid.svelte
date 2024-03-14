<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { BoardData } from '$lib/terpip-engine/game-state.ts';

  const dispatch = createEventDispatcher();

  export let data: BoardData = [];

  function createHandleCellClick(row, col) {
    return () => {
      dispatch('playerMove', { row, col });
    };
  }
</script>

<table>
{#each data as rowData, rowIndex}
  <tr>
  {#each rowData as cellData, cellIndex}
    <td class="player-{cellData.player}">
      <button on:click={createHandleCellClick(rowIndex, cellIndex)}>
        {cellData.value}
      </button>
    </td>
  {/each}
  </tr>
{/each}
</table>
