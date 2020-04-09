module.exports = {
  webpackConfig: {
    module: {
      rules: [
        // Babel loader will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        // Other loaders that are needed for your components
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
        },
      ],
    },
  },

  assetsDir: "src/assets",
  pagePerSection: true,
  sections: [
    {
      name: "Welcome",
      content: "src/docs/introduction.md",
    },
    {
      name: "Tutorial",
      content: "src/docs/tutorial.md",
      sections: [
        {
          name: "Structure your library",
          content: "src/docs/libraryStructure.md",
        },
        {
          name: "Install SCSS modules without going mad",
          content: "src/docs/SASS.md",
        },
        {
          name: "Component crafting",
          content: "src/docs/craft.md",
          sections: [
            {
              name: "Buttons everywhere",
              components: "src/Tutorial/Buttons/**/*.js",
              content: "src/docs/buttons.md",
            },
            {
              name: "More fancy stuff",
            },
          ],
        },
      ],
      sectionDepth: 1,
    },
    {
      name: "Library",
      content: "src/docs/components.md",
      sections: [{}],
      sectionDepth: 1,
    },
  ],
};
