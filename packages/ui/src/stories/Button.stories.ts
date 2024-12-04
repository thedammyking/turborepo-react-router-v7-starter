import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import Button from '../components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn(), children: 'Button' }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', { name: /Button/i })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', { name: /Button/i }));
    await expect(args.onClick).toHaveBeenCalled();
  }
};
