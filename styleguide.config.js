
module.exports = {
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'src/docs/introduction.md'
    },
    {
        
        name: 'Components',
        content: 'src/docs/components.md',
        sections : [
            {   
                name: 'Buttons',
                components: 'src/components/Buttons/**/*.js',
                content: 'src/docs/buttons.md',

            }
        ],
       
        sectionDepth: 1
    }



]

  


};



