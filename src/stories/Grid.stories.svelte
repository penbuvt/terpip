<script lang="ts" context="module">
  import type { Meta, StoryObj } from '@storybook/svelte';
  import { action } from '@storybook/addon-actions';
  import { fn } from '@storybook/test';
  import { withActions } from '@storybook/addon-actions/decorator';
  import Grid from '$lib/Grid.svelte';

  export const meta = {
    title: 'Grid',
    component: Grid,
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
    },
  } satisfies Meta<Grid>;
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <Grid on:playerMove={action('on-player-move')} {...args} />
</Template>

<Story name="Base" args={{
    data: [
      [
        { "value": 1, "player": 0 },
        { "value": 2, "player": 0 },
        { "value": 3, "player": 0 },
      ],
      [
        { "value": 2, "player": 1 },
        { "value": 3, "player": 1 },
        { "value": 4, "player": 1 },
      ],
      [
        { "value": 3, "player": 0 },
        { "value": 4, "player": 0 },
        { "value": 5, "player": 0 },
      ],
    ],
  }}/>
