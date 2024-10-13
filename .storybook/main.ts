import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  addons: ["@storybook/addon-essentials"],
  docs: {
    autodocs: "tag",
  },
  framework: "@storybook/nextjs",
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
};

export default config;
