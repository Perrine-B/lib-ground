module.exports = {
  assetsDir: 'src/assets',
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
          name: 'Structure your library',
          content: 'src/docs/libraryStructure.md'
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
              name: 'More fancy stuff'
            }
          ],
        },
      ],
      sectionDepth: 1,
    },
    {
      name: "Library",
      content: "src/docs/components.md",
      sections: [
        {
         
        },
      ],
      sectionDepth: 1,
    },
  ],
};
