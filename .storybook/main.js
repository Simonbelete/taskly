const path = require("path");

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-tailwind-dark-mode",
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules.push(path.resolve(__dirname, "../"));

    /*config.module.rules.push({
      test: /\.sass$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });*/

    config.module.rules.push({
      test: /\.sass|.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: ["tailwindcss", "autoprefixer"],
            },
          },
        },
        "sass-loader",
      ],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};
