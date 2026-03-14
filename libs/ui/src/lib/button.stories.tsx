import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';

const meta = {
  title: 'Primitives/Button',
  component: Button,
  args: {
    label: 'Run nx serve web',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    label: 'Run nx storybook ui',
    variant: 'secondary',
  },
};
