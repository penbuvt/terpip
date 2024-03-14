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

<table class="terpip-board">
{#each data as rowData, rowIndex}
  <tr>
  {#each rowData as cellData, cellIndex}
    <td>
      <button class="terpip-cell-button player-{cellData.player}" on:click={createHandleCellClick(rowIndex, cellIndex)}>
        {cellData.value}
      </button>
    </td>
  {/each}
  </tr>
{/each}
</table>
