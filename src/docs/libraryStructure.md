Maybe because I was a librarian, I feel always concerned about how a document is composed. So, the first section of this note will be about how create a directory tree into styleguidist. There is a little few tips that are really easy to set, directly into the ``styleguide.config.js``

## Sections

Sections are the most important part of your tree. To enable that functionnality in styleguidist, you'll have to add `pagePerSection: true` to the very beginning of the ``module.export`` part of your config file. Then, compose your sections as you want it to be.
Sections have three most important props : 
- name : which define how your section will be entitled
- content : which indicate the location of the information that have to be displayed.
- components : which locate components that will be displayed into that section.

A section can include multiple sections. How they are shown through the tree directory cans be set by the use of the ``sectionDepth`` property.

Most of the time, a change into the ``styleguide.config.js`` will need you to restart the server.