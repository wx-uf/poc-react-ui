/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  webpackFinal: async (config) => {
    // Add rules for handling CSS modules
    config.module.rules.push({
      test: /\.module\.css$/,
      use: ["style-loader", "css-loader?modules"],
    });
    return config;
  },
};

export default config;
