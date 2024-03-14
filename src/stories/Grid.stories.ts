import type { Meta, StoryObj } from '@storybook/svelte';
import Grid from '$lib/Grid.svelte';

const meta = {
  title: 'Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
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
  },
};
