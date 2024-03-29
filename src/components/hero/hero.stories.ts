import type { Meta, StoryObj } from "@storybook/react";

import { Hero } from "./hero";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Hero",
  component: Hero,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  /**
   * @see https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/
   */
  parameters: {
    nextjs: {
      router: {},
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    className: "mt-0 lg:mt-0",
  },
};
