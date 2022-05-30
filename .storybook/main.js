module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next-router"
  ],
  framework: "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      include: /node_modules/,
      test: /\.mjs$/,
      type: "javascript/auto",
    });

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        plugins: [
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-optional-chaining"
        ],
      },
      });
    return config;
  },
};